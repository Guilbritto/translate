import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';
import factory from '../factories';

describe('User', () => {
  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('Should not be able to create a user with a duplicate email', async () => {
    const user = await factory.attrs('User');
    await request(app)
      .post('/users')
      .send(user);
    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('error', 'This e-mail already in use');
  });

  it('Should not able to create a user without a name', async () => {
    const user = await factory.attrs('User', {
      name: '',
    });
    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('error', 'Validation fails');
  });

  it('Should not able to create a user without a password', async () => {
    const user = await factory.attrs('User', {
      password: '',
    });
    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('error', 'Validation fails');
  });

  it('Should not able to create a user without a email', async () => {
    const user = await factory.attrs('User', {
      email: '',
    });
    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('error', 'Validation fails');
  });

  it('Should not able to create a user with a password less than 6 caracters', async () => {
    const user = await factory.attrs('User', {
      password: '12345',
    });
    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('error', 'Validation fails');
  });
});
