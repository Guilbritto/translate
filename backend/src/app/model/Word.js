import Sequelize, { Model } from 'sequelize';

class Word extends Model {
  static init(sequelize) {
    super.init(
      {
        key: Sequelize.BOOLEAN,
        value: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Word;
