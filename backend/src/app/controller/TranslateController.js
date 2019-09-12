import Translate from '../model/Translate';
import Languages from '../model/Languages';
import Word from '../model/Word';

class TranslateController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const teste = await Translate.findAll({
      attributes: ['favorite', 'translated'],
      include: [
        {
          model: Word,
          attributes: ['key', 'value'],
        },
        {
          model: Languages,
          attributes: ['lang'],
          where: { lang: req.params.lang },
        },
      ],
      offset: (page - 1) * 50,
      limit: 50,
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
