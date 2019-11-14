import Menu from '../models/items';

class MenuItems {
  static async getMenu(req, res) {
    const orders = await Menu.find().sort('item');
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

  static async editItem(req, res) {
    const item = await Menu.findOneAndUpdate(req.params.id, { item: req.body.item }, {
      new: true,
    });

    return res.status(200).json({
      status: 200,
      message: 'item has been successfully updated',
      data: item,
    });
  }

  static async deleteItem(req, res) {
    const item = await Menu.findOneAndDelete(req.params.id);
    return res.status(200).json({
      status: 200,
      message: 'item is successfully removed from the menu',
      data: item,
    });
  }
}

export default MenuItems;
