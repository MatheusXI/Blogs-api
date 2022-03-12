const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (token, userInfo) => {
  const decode = jwt.verify(token, secret).data;

  return Object.keys(decode).some((key) => decode[key] === userInfo);
};
