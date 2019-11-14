import Orders from '../models/order';

class OrderList {
  async placeOrder(req, res) {
    let order = new Orders({ order: req.body.order });
    order = await order.save();

    return res.status(200).json({
      status: 200,
      message: 'Your order has been placed',
    });
  }
}

export default new OrderList();
