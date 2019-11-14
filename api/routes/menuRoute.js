import express from 'express';
import MenuItems from '../controllers/menu';
import validation from '../middleware/validation';
import verifyToken from '../middleware/authorization';
import admin from '../middleware/adminAuth';
import Checks from '../middleware/validInputs';

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
  Checks.checkItemConflict,
  MenuItems.postItem,
);

menuRoute.put(
  '/api/fast-food/menu/:id',
  verifyToken,
  admin,
  Checks.checkItemId,
  validation.validateMenuItem,
  Checks.checkItemConflict,
  MenuItems.editItem,
);

menuRoute.delete(
  '/api/fast-food/menu/:id',
  verifyToken,
  admin,
  Checks.checkItemId,
  MenuItems.deleteItem,
);

export default menuRoute;
