import mongoose from 'mongoose';
import Orders from '../models/order';

class OrderList {
  async getOrders(req, res) {
    const orders = await Orders.find().sort('-timeOrdered');
    return res.status(200).json({
      status: 200,
      message: 'Orders that have been placed',
      data: orders,
    });
  }

  async getSpecificOrder(req, res) {
    try {
      const order = await Orders.findById(req.params.id);
      return res.status(200).json({
        status: 200,
        message: 'Success',
        data: order,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getOrdersHistory(req, res) {
    try {
      const userHistory = await Orders.findOne({ userId: req.body.userId });
      return res.status(200).json({
        status: 200,
        message: 'Success',
        data: userHistory,
      });
    } catch (err) {
      if (err === mongoose.Types.ObjectId) {
        return res.status(404).json({
          status: 404,
          error: 'user doesnt exist',
        });
      }
    }
  }

  async placeOrder(req, res) {
    let order = new Orders({ item: req.body.item, userId: req.user._id });
    order = await order.save();

    return res.status(200).json({
      status: 200,
      message: 'Your order has been placed',
      data: {
        itemOrdered: order.item,
        timeOrdered: order.timeOrdered
      },
    });
  }

  async updateOrder(req, res) {
    const order = await Orders.findByIdAndUpdate(req.params.id, {
      orderFlag: req.body.orderFlag,
      orderStatus: req.body.orderStatus,
    }, { new: true });

    return res.status(200).json({
      status: 200,
      message: 'Order status has been updated',
      data: order,
    });
  }
}

export default new OrderList();
