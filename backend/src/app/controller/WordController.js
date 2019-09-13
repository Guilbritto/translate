import Word from '../model/Word';
import { Op } from 'sequelize';

class WordController {
  async show(req, res) {
    const word = req.params.word;
    const response = await Word.findAll({
      attributes: ['key', 'value'],
      where: { value: { [Op.iLike]: `%${word}%` } },
    });

    return res.json(response);
  }

  async index(req, res) {
    const { page = 1 } = req.params;
    const response = await Word.findAll({
      attributes: ['key', 'value'],
      offset: (page - 1) * 50,
      limit: 50,
    });
    return res.json(response);
  }
}

export default new WordController();
