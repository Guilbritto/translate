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
});
