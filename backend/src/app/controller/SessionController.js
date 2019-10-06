import User from '../model/User';
import jwt from 'jsonwebtoken';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found!' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match!' });
    }

    return res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      token: jwt.sign({ id: user.id }, process.env.APP_SECRET, {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
