const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (token, userInfo) => {
  try {
    const decode = jwt.verify(token, secret);
  
    const user = userInfo.find((info) => info.dataValues.email === decode.email);
    
    if (!user) return { error: 'token invalido' };
    return user;
  } catch (error) {
    console.log(error);
    return { error };
  }
};
