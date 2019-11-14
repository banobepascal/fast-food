import express from 'express';
import OrderList from '../controllers/orders';
import Validation from '../middleware/validation';
import Checks from '../middleware/validInputs';

const orderRoutes = express.Router();

orderRoutes.post(
  '/api/users/orders',
  Validation.validateOrder,
  Checks.checkOrder,
  OrderList.placeOrder,
);

export default orderRoutes;
