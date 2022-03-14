require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
};

module.exports = (obj) => {
  const { password, ...objWithoutPassword } = obj;
  const token = jwt.sign(objWithoutPassword, secret, jwtConfig);
  return token;
};
