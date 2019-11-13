import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from 'dotenv';

ENV.config();

class Helpers {
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static generateToken(id, isAdmin) {
    const token = jwt.sign({ _id: id, _isAdmin: isAdmin }, process.env.JWT_KEY, {
      expiresIn: '1d',
    });
    return token;
  }
}

export default Helpers;
