import Languages from '../model/Languages';

class LanguagesController {
  async show(req, res) {
    const langs = await Languages.findAll();
    const langList = [];

    langs.map(element => {
      langList.push(element.lang);
    });

    res.json(langList);
  }
}

export default new LanguagesController();
