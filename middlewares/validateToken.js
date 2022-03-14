const { User } = require('../models');

const tokenVerify = require('../auxiliarFunctions/verifyToken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const users = await User.findAll();

  const verifyToken = tokenVerify(token, users);
  
  if (verifyToken.error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.token = verifyToken;
  next();
};
