import Menu from '../models/items';

class Orders {
  static async getOrders(req, res) {
    const orders = await Menu.find().sort('item');
    return res.status(200).json({
      status: 200,
      message: 'got all orders',
      data: orders,
    });
  }

  static async postItem(req, res) {
    let item = new Menu({ item: req.body.item });
    item = await item.save();

    return res.status(201).json({
      status: 201,
      message: 'Item added to menu',
      data: item,
    });
  }
}

export default Orders;
