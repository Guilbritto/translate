import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Guilherme Brito',
        email: 'guilhermebritto.prof@gmail.com',
        password: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });

  it('Should not be able to create a user with a duplicate email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Guilherme Brito',
        email: 'duplicated@teste.com',
        password: 'Padrao998',
      });
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Guilherme Brito',
        email: 'duplicated@teste.com',
        password: 'Padrao998',
      });

    expect(response.body).toHaveProperty('error', 'This e-mail already in use');
  });

  it('Should not able to create a user without a name', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        email: 'duplicated@teste.com',
        password: 'Padrao998',
      });

    expect(response.body).toHaveProperty('error', 'Validation fails');
  });

  it('Should not able to create a user without a password', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Guilherme Brito',
        email: 'duplicated@teste.com',
      });

    expect(response.body).toHaveProperty('error', 'Validation fails');
  });
  it('Should not able to create a user without a email', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Guilherme Brito',
        password: 'Padrao998',
      });

    expect(response.body).toHaveProperty('error', 'Validation fails');
  });
  it('Should not able to create a user with a password less than 6 caracters', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Guilherme Brito',
        email: 'duplicated@teste.com',
        password: 'Padr',
      });

    expect(response.body).toHaveProperty('error', 'Validation fails');
  });
});
