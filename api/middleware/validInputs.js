/* eslint-disable consistent-return */
import bcrypt from 'bcrypt';
import validation from '../helpers/validation';
import User from '../models/user';

class Rules {
  static authRules(req, res, next) {
    const { error } = validation.validateUserInputs(req.body);
    if (error) {
      return res
        .status(400)
        .json({ status: 400, error: error.details[0].message });
    }
    next();
  }

  static async checkSignUp(req, res, next) {
    const checkUsername = await User.findOne({ username: req.body.username });
    if (checkUsername) {
      return res.status(409).json({
        status: 409,
        error: 'username already exists, please choose another email',
      });
    }

    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail) {
      return res.status(409).json({
        status: 409,
        error: 'email already exists, please choose another email',
      });
    }
    next();
  }

  static async checkSignIn(req, res, next) {
    const checkUsername = await User.findOne({ username: req.body.username });
    if (!checkUsername) {
      return res.status(400).json({
        status: 400,
        error: 'Invalid email or password',
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      checkUsername.password,
    );
    if (!validPassword) {
      return res.status(400).json({
        status: 400,
        error: 'Invalid email or password',
      });
    }
    next();
  }
}

export default Rules;
