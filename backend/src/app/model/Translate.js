import Sequelize, { Model } from 'sequelize';

class Translate extends Model {
  static init(sequelize) {
    super.init(
      {
        favorite: Sequelize.BOOLEAN,
        translated: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associations(models) {
    this.belongsTo(models.Word, { foreignKey: 'word_id' });
    this.belongsTo(models.Languages, {
      foreignKey: 'languages_id',
    });
  }
}
export default Translate;
