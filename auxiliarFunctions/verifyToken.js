const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (token, userInfo) => {
  try {
    console.log(token, 'token verify token');

    const decode = jwt.verify(token, secret);
    console.log(decode, 'decode verify token');
    return userInfo.find((info) => info.dataValues.email === decode.email);
  } catch (error) {
    console.log(error);
    return { error };
  }
};
