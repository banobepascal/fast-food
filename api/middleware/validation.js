import Joi from 'joi';
import exceptionHandler from '../helpers/exceptions';

Joi.objectId = require('joi-objectid')(Joi);

const stringValidator = new RegExp('^(^[a-zA-Z])(?=.*[a-z])');
const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,12})');

class Validation {
  validateUserInputs(req, res, next) {
    const schema = {
      firstname: Joi.string().min(3).max(50).regex(stringValidator)
        .required()
        .error(() => ({
          message: 'firstname should start with a letter and minimum of 3 characters',
        })),
      lastname: Joi.string().min(3).max(50).regex(stringValidator)
        .required()
        .error(() => ({
          message: 'lastname should start with a letter and minimum of 3 characters',
        })),
      username: Joi.string().min(3).max(50).regex(stringValidator)
        .required()
        .error(() => ({
          message: 'username should start with a letter and minimum of 3 characters',
        })),
      email: Joi.string().min(5).max(255).required()
        .email()
        .error(() => ({
          message: 'please enter valid email i.e. name@domain.com',
        })),
      password: Joi.string().min(8).max(255).regex(validPassword)
        .required()
        .error(() => ({
          message: `password must not be less than 8 characters 
                    and must contain lowercase letters, uppercase letters, 
                    numbers and special characters (!@#$%^&*)`,
        })),
      confirmPassword: Joi.any().equal(Joi.ref('password')).required()
        .error(() => ({
          message: 'Passwords don\'t match',
        })),
      isAdmin: Joi.boolean().error(() => ({
        message: 'isAdmin has to be a boolean',
      })),
    };

    return exceptionHandler(Joi.validate(req.body, schema), res, next);
  }

  validateMenuItem(req, res, next) {
    const schema = {
      item: Joi.string().min(3).regex(stringValidator)
        .required()
        .error(() => ({
          message: 'please enter valid item with 3 minimum letters',
        })),
    };

    return exceptionHandler(Joi.validate(req.body, schema), res, next);
  }

  validateOrder(req, res, next) {
    const schema = {
      item: Joi.string().min(3).regex(stringValidator)
        .required()
        .error(() => ({
          message: 'please place a valid order with 3 minimum letters',
        })),
    };

    return exceptionHandler(Joi.validate(req.body, schema), res, next);
  }

  validateOrderUpdate(req, res, next) {
    const schema = {
      orderFlag: Joi.string().min(7).lowercase().valid(['accepted', 'declined'])
        .required()
        .error(() => ({
          message: 'Order flag is either Accepted or Declined',
        })),
      orderStatus: Joi.string().min(7).lowercase().valid('completed')
        .required()
        .error(() => ({
          message: 'Order status has to be completed',
        })),
    };

    return exceptionHandler(Joi.validate(req.body, schema), res, next);
  }

  validateUserId(req, res, next) {
    const schema = {
      userId: Joi.objectId().min(3).required()
        .error(() => ({
          message: 'please provide correct Object Id',
        })),
    };

    return exceptionHandler(Joi.validate(req.body, schema), res, next);
  }
}

export default new Validation();
