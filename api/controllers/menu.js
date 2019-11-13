import Menu from '../models/items';

class MenuItems {
  static async getMenu(req, res) {
    const orders = await Menu.find().sort('item');
    console.log(orders[0].item);
    return res.status(200).json({
      status: 200,
      message: 'Items on the menu',
      data: orders,
    });
  }

  static async postItem(req, res) {
    let item = new Menu({ item: req.body.item });
    item = await item.save();

    return res.status(201).json({
      status: 201,
      message: 'Item added to menu',
      data: item.item,
    });
  }
}

export default MenuItems;
