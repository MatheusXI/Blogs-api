const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (token, userInfo) => {
  const decode = jwt.verify(token, secret).data;
  if (!decode) return false;
  return userInfo.find((info) => info.email === decode.email);
};
