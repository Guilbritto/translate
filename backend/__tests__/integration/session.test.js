import User from '../../src/app/model/User';
import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should be able to Login', async () => {
    await User.create({
      name: 'Guilherme Brito',
      email: 'teste@login',
      password: 'Padrao998',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'teste@login',
        password: 'Padrao998',
      });

    expect(response.body).toHaveProperty('token');
  });

  it('Should not be able to Login cause the e-mail does not exists', async () => {
    await User.create({
      name: 'Guilherme Brito',
      email: 'teste@logininvalido',
      password: 'Padrao998',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'testedelogininvalido',
        password: 'Padrao998',
      });

    expect(response.body).toHaveProperty('error', 'User not found!');
  });

  it('Should not be able to Login cause password does not match', async () => {
    await User.create({
      name: 'Guilherme Brito',
      email: 'teste@loginsenhainvalida',
      password: 'Padrao998',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'teste@loginsenhainvalida',
        password: 'testedesenhainvalida',
      });

    expect(response.body).toHaveProperty('error', 'Password does not match!');
  });
});
