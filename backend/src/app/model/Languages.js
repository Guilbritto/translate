import Sequelize, { Model } from 'sequelize';

class Languages extends Model {
  static init(sequelize) {
    super.init(
      {
        lang: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Languages;
