import Translate from '../model/Translate';
import Languages from '../model/Languages';
import Word from '../model/Word';

class TranslateController {
  async index(req, res) {
    const teste = await Translate.findAll({
      include: [
        {
          model: Word,
          as: 'words',
        },
      ],
    });

    return res.json(teste);
  }

  async update(req, res) {
    const { wordList } = req.body;
    const returnWord = [];
    if (!wordList) {
      return res.status(401).json({ error: 'Word List not sent' });
    }

    wordList.map(async element => {
      const word = await Translate.findOne({
        where: { key: element.key, lang: element.lang },
      });

      if (word) {
        await word.update(element);
        returnWord.push({ value: element.value, flag: true });
      } else {
        returnWord.push({ value: element.value, flag: false });
      }
    });

    return res.json({ message: 'Tradução concluída!', wordList: returnWord });
  }
}

export default new TranslateController();
