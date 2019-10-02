import { Model } from 'sequelize';

class UsersProject extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Project, { foreignKey: 'project_id' });
  }
}

export default UsersProject;
