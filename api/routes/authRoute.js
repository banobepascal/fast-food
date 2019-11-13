import express from 'express';
import Auth from '../controllers/Auth';
import Rules from '../middleware/validInputs';

const userRoute = express.Router();

userRoute.post(
  '/user/api/signup',
  Rules.authRules,
  Rules.checkSignUp,
  Auth.signUp,
);

userRoute.post(
  '/user/api/login',
  Rules.checkSignIn,
  Auth.login,
);

export default userRoute;
