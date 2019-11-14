import mongoose from 'mongoose';

const Orders = mongoose.model('Orders', new mongoose.Schema({
  order: {
    type: String,
    minlength: 3,
    required: true,
  },
  timeOrdered: {
    type: Date,
    default: Date.now,
  },
}));

export default Orders;
