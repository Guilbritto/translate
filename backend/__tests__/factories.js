import faker from 'faker';
import { factory } from 'factory-girl';
import User from '../src/app/model/User';
import Project from '../src/app/model/Project';

factory.define('User', User, {
  name: faker.name.findName,
  email: faker.internet.email,
  password: faker.internet.password,
});
factory.define('Project', Project, {
  name: faker.name.jobTitle,
});

export default factory;
