import express from 'express';
import Auth from '../controllers/Auth';
import Checks from '../middleware/validInputs';
import validation from '../middleware/validation';

const userRoute = express.Router();

userRoute.post(
  '/api/auth/signup',
  validation.validateUserInputs,
  Checks.checkSignUp,
  Auth.signUp,
);

userRoute.post(
  '/api/auth/login',
  Checks.checkSignIn,
  Auth.login,
);

export default userRoute;
