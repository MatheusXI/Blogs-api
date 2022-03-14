const { User } = require('../models');
const tokenGenerate = require('../auxiliarFunctions/tokenG');
const tokenVerify = require('../auxiliarFunctions/verifyToken');

const createUser = async (obj) => {
  const verifyUser = await User.findOne({ where: { email: obj.email } });

  if (verifyUser) return { message: 'User already registered' };

  await User.create(obj);
  const token = tokenGenerate(obj);

  return { token };
};

const checkUserLogin = async (obj) => {
  const { email, password } = obj;

  const user = await User.findOne({ where: { email, password } });

  if (!user) return { message: 'Invalid fields' };

  const token = tokenGenerate({ email });

  return { token };
};

const getAllUsers = async (token) => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  console.log(users[0].dataValues, 'users get all services');
  const verify = tokenVerify(token, users);

  if (verify.error) return { message: 'Expired or invalid token' };

  return users;
};

module.exports = {
  createUser,
  checkUserLogin,
  getAllUsers,
};
