import express from 'express';
import MenuItems from '../controllers/menu';
import validation from '../middleware/validation';
import verifyToken from '../middleware/authorization';
import Rules from '../middleware/validInputs';
import admin from '../middleware/adminAuth';

const menuRoute = express.Router();

menuRoute.get(
  '/api/fast-food/menu',
  verifyToken,
  admin,
  MenuItems.getMenu,
);

menuRoute.post(
  '/api/fast-food/menu',
  verifyToken,
  admin,
  validation.validateMenuItem,
  Rules.checkItem,
  MenuItems.postItem,
);

export default menuRoute;
