import mongoose from 'mongoose';

const User = mongoose.model('User', new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
}));

export default User;
