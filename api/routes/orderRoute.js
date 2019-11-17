import express from 'express';
import OrderList from '../controllers/orders';
import Validation from '../middleware/validation';
import Checks from '../middleware/validInputs';
import verifyToken from '../middleware/authorization';

const orderRoutes = express.Router();

orderRoutes.get(
  '/api/fast-food/users/orders',
  Checks.checkUserOrders,
  OrderList.getOrders,
);

orderRoutes.get(
  '/api/fast-food/orders/:id',
  verifyToken,
  Checks.checkOrderId,
  OrderList.getSpecificOrder,
);

orderRoutes.get(
  '/api/fast-food/orders/history',
  verifyToken,
  Validation.validateUserId,
  Checks.checkUserId,
  OrderList.getOrdersHistory,
);

orderRoutes.post(
  '/api/fast-food/orders',
  verifyToken,
  Validation.validateMenuItem,
  Checks.checkOrder,
  OrderList.placeOrder,
);

orderRoutes.put(
  '/api/fast-food/orders/:id',
  verifyToken,
  Checks.checkOrderId,
  Validation.validateOrderUpdate,
  OrderList.updateOrder,
);

export default orderRoutes;
