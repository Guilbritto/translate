import Translate from '../model/Translate';
import Word from '../model/Word';
import Languages from '../model/Languages';
import fs from 'fs';
class LoadController {
  async store(req, res) {
    /**
     * Check if the file is sent
     */
    if (!req.file) {
      res.status(400).json({ error: 'File is requred!' });
    }
    // await Translate.destroy({
    //   where: { lang: req.params.lang },
    // });

    let lang = JSON.parse(fs.readFileSync(req.file.path));
    /**
     * Cria e confere se um idioma existe
     */
    const language = await Languages.findOne({
      where: { lang: req.params.lang },
    }).then(result => {
      if (!result) {
        return Languages.create({ lang: req.params.lang });
      } else {
        return result;
      }
    });

    Object.keys(lang).forEach(async function(item) {
      var word_id = 0;
      /**
       * Check if the word exist if don't create a new word
       */
      const word = await Word.findOne({ where: { key: item } });
      if (!word) {
        const createdWord = await Word.create({
          key: item,
          value: lang[item],
        }).then(word => {
          return word;
        });
        word_id = createdWord.id;
      } else {
        word_id = word.id;
      }
      await Translate.create({
        favorite: false,
        translated: lang[item],
        word_id: word_id,
        languages_id: language.id,
      });
    });

    return res.json({ message: 'Carga concluída com sucesso!' });
  }
}

export default new LoadController();
