import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';
import factory from '../factories';

describe('Project', () => {
  it('Should be able to Create a Project', async () => {
    const userFactory = await factory.create('User');
    const project = await factory.attrs('Project');

    const user = await request(app)
      .post('/sessions')
      .send({
        email: userFactory.dataValues.email,
        password: userFactory.dataValues.password,
      });
    const response = await request(app)
      .post('/projects')
      .set('Authorization', 'Bearer ' + user.body.token)
      .send({
        name: project.name,
      });
    expect(response.body).toHaveProperty('id');
  });

  it('Should be able invite another User to the project', async () => {
    const owner = await factory.create('User');
    const invited = await factory.create('User');
    const project = await factory.create('Project', {
      owner: owner.id,
    });

    const user = await request(app)
      .post('/sessions')
      .send({
        email: owner.dataValues.email,
        password: owner.dataValues.password,
      });

    const response = await request(app)
      .post('/projects/invite')
      .set('Authorization', 'Bearer ' + user.body.token)
      .send({
        project_id: project.dataValues.id,
        user_id: invited.dataValues.id,
      });

    expect(response.body).toHaveProperty('id');
  });

  it('Should be able to list a project with users into that project', async () => {
    const owner = await factory.create('User');
    const invited = await factory.create('User');
    const project = await factory.create('Project', {
      owner: owner.id,
    });

    await factory.create('UsersProject', {
      user_id: invited.id,
      project_id: project.id,
    });

    const user = await request(app)
      .post('/sessions')
      .send({
        email: owner.email,
        password: owner.password,
      });

    const response = await request(app)
      .get('/projects/users/' + project.id)
      .set('Authorization', 'Bearer ' + user.body.token);

    expect(response.body).toHaveProperty('Project');
  });
});
