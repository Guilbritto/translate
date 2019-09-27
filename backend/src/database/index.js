import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Translate from '../app/model/Translate';
import Languages from '../app/model/Languages';
import Word from '../app/model/Word';
import User from '../app/model/User';
import Project from '../app/model/Project';
import UsersProject from '../app/model/UsersProject';

const models = [Translate, Languages, Word, User, Project, UsersProject];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
