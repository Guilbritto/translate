import User from '../../src/app/model/User';
import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';
import factory from '../factories';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should be able to Login', async () => {
    const user = await factory.create('User');
    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.dataValues.email,
        password: user.dataValues.password,
      });

    expect(response.body).toHaveProperty('token');
  });

  it('Should not be able to Login cause the e-mail does not exists', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'testedelogininvalido',
        password: user.dataValues.password,
      });

    expect(response.body).toHaveProperty('error', 'User not found!');
  });

  it('Should not be able to Login cause password does not match', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.dataValues.email,
        password: 'teste123',
      });

    expect(response.body).toHaveProperty('error', 'Password does not match!');
  });
});
