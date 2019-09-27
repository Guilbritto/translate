import { Model } from 'sequelize';

class UserProject extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
    return this;
  }

  associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Project, { foreignKey: 'project_id' });
  }
}

export default UserProject;
