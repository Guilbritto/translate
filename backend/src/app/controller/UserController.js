import User from '../model/User';
import * as Yup from 'yup';
class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email } = req.body;

    const createdUser = await User.findOne({
      where: {
        email,
      },
    });

    if (createdUser) {
      return res.status(400).json({ error: 'This e-mail already in use' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
