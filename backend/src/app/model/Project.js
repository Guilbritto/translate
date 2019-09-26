import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  associate(models) {
    this.belongsTo(model.User);
    this.belongsTo(mode.UserProject);
  }
}

export default Project;
