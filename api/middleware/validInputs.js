/* eslint-disable consistent-return */
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import User from '../models/user';
import Menu from '../models/items';

class Checks {
  static async checkSignUp(req, res, next) {
    const checkUsername = await User.findOne({ username: req.body.username });
    if (checkUsername) {
      return res.status(409).json({
        status: 409,
        error: 'username already exists, please choose another username',
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
        error: 'Invalid username or password',
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      checkUsername.password,
    );
    if (!validPassword) {
      return res.status(400).json({
        status: 400,
        error: 'Invalid username or password',
      });
    }
    next();
  }

  static async checkItemConflict(req, res, next) {
    const item = await Menu.findOne({ item: req.body.item });
    if (item) {
      return res.status(409).json({
        status: 409,
        error: `${req.body.item} already exists on menu`,
      });
    }
    next();
  }

  static async checkItemId(req, res, next) {
    const item = await Menu.findById(req.params.id);
    if (req.params.id !== mongoose.Types.ObjectId()) {
      return res.status(404).json({
        status: 404,
        error: 'item with given id is not on the menu',
      });
    }

    if (!item) {
      return res.status(404).json({
        status: 404,
        error: 'item with given id is not on the menu',
      });
    }
    next();
  }
}

export default Checks;
