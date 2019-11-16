import mongoose from 'mongoose';

const Orders = mongoose.model('Orders', new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  item: {
    type: String,
    minlength: 3,
    required: true,
  },
  timeOrdered: {
    type: Date,
    default: Date.now,
  },
  orderFlag: {
    type: String,
    minlength: 7,
    default: 'Processing',
  },
  orderStatus: {
    type: String,
    minlength: 7,
    default: 'Processing',
  },
}));

export default Orders;
