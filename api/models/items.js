import mongoose from 'mongoose';

const Menu = mongoose.model('Menu', new mongoose.Schema({
  item: {
    type: String,
    required: true,
    minlength: 3,
  },
}));

module.exports = Menu;
