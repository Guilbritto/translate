import User from '../../src/app/model/User';
import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Project', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should be able to Create a Project', async () => {
    await User.create({
      name: 'Guilherme Brito',
      email: 'teste@login.com',
      password: 'Padrao998',
    });

    const user = await request(app)
      .post('/sessions')
      .send({
        email: 'teste@login.com',
        password: 'Padrao998',
      });

    const response = await request(app)
      .post('/projects')
      .send({
        name: 'Projeto Teste',
      })
      .set({ Authorization: user.body.token });

    expect(response.body).toHaveProperty('id');
  });
});
