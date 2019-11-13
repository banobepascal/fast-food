import express from 'express';
import Orders from '../controllers/menu';
import validation from '../middleware/validation';
import verifyToken from '../middleware/authorization';
import Rules from '../middleware/validInputs';
import admin from '../middleware/adminAuth';

const menuRoute = express.Router();

menuRoute.post(
  '/api/fast-food/menu',
  verifyToken,
  admin,
  validation.validateMenuItem,
  Rules.checkItem,
  Orders.postItem,
);
menuRoute.get('/api/fast-food/menu', verifyToken, admin, Orders.getOrders);

export default menuRoute;
