import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import User from '../models/user';
import Menu from '../models/items';
import Orders from '../models/order';

class Checks {
  async checkSignUp(req, res, next) {
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

  async checkSignIn(req, res, next) {
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

  async checkItemConflict(req, res, next) {
    const item = await Menu.findOne({ item: req.body.item });
    if (item) {
      return res.status(409).json({
        status: 409,
        error: `${req.body.item} already exists on menu`,
      });
    }
    next();
  }

  async checkItemId(req, res, next) {
    const item = await Menu.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        status: 404,
        error: 'item with given id is not on the menu',
      });
    }
    next();
  }

  async checkOrder(req, res, next) {
    const item = await Menu.findOne({ item: req.body.item });
    if (!item) {
      return res.status(404).json({
        status: 404,
        error: `${req.body.item} is not on the menu`,
      });
    }
    next();
  }

  async checkUserOrders(req, res, next) {
    const items = await Orders.find();
    if (items < 1) {
      return res.status(404).json({
        status: 404,
        message: 'You have no orders now',
      });
    }
    next();
  }

  async checkOrderId(req, res, next) {
    const order = await Orders.findById(req.params.id);
    if (!order) {
      return res.status(404).json({
        status: 404,
        error: 'Order with given id not found',
      });
    }
    next();
  }

  async checkUserId(req, res, next) {
    const userId = await Orders.findOne({ userId: req.body.userId });
    if (!userId) {
      return res.status(404).json({
        status: 404,
        error: 'user doesnt exist',
      });
    }
    next();
  }
}

export default new Checks();
