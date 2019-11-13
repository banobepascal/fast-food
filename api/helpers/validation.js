import Joi from 'joi';

class Validation {
  static validateUserInputs(user) {
    const stringValidator = new RegExp('^(^[a-zA-Z])(?=.*[a-z])');
    const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,12})');

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
    };

    return Joi.validate(user, schema);
  }
}

export default Validation;
