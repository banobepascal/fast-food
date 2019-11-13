import User from '../models/user';
import Helpers from '../helpers/verifications';

class Auth {
  static async signUp(req, res) {
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    user.password = await Helpers.hashPassword(user.password);
    await user.save();

    const token = Helpers.generateToken(user.id);
    console.log(user.id);
    return res.status(201).json({
      status: 201,
      message: 'Account successfully created',
      data: token,
    });
  }

  static async login(req, res) {
    const checkUsername = await User.findOne({ username: req.body.username });
    const token = Helpers.generateToken(checkUsername.id);
    return res.status(200).json({
      status: 200,
      message: 'Successfully logged in',
      data: token,
    });
  }
}

export default Auth;
