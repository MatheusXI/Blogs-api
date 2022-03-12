require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
};

module.exports = (obj) => {
  const token = jwt.sign(obj, secret, jwtConfig);
  console.log(token, 'token jwtGenerate');
  return token;
};
