import faker from 'faker';
import { factory } from 'factory-girl';
import User from '../src/app/model/User';
import Project from '../src/app/model/Project';
import UsersProject from '../src/app/model/UsersProject';

factory.define('User', User, {
  name: faker.name.findName,
  email: faker.internet.email,
  password: faker.internet.password,
});
factory.define('Project', Project, {
  name: faker.name.jobTitle,
});
factory.define('UsersProject', UsersProject, {
  user_id: null,
  project_id: null,
});

export default factory;
