import Sequelize, { Model } from 'sequelize';
import Languages from './Languages';
class Translate extends Model {
  static init(sequelize) {
    super.init(
      {
        favorite: Sequelize.BOOLEAN,
        translated: Sequelize.STRING,
        traslatedLang: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Word, { foreignKey: 'word_id' });
    this.belongsTo(models.Languages, {
      foreignKey: 'languages_id',
    });
  }
}
export default Translate;
