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
    });

    return res.json(teste);
  }

  async show(req, res) {
    const { keyWord } = req.params;
    const { lang } = req.query;

    const response = await Translate.findOne({
      attributes: ['id', 'favorite', 'translated'],
      limit: 50,
      include: [
        {
          attributes: ['key', 'value'],
          model: Word,
          where: {
            key: keyWord,
          },
        },
        {
          attributes: [],
          model: Languages,
          where: {
            lang: lang,
          },
        },
      ],
    });

    return res.json(response);
  }

  async update(req, res) {
    const wordList = req.body;
    const returnWord = [];

    if (!wordList) {
      return res.status(401).json({ error: 'Word List not sent' });
    }

    const response = await Translate.update(wordList, {
      where: {
        id: wordList.id,
      },
    });

    return res.json(response);
  }
}

export default new TranslateController();
