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
  console.log(verify, 'verify getAll');
  if (verify.error) return { message: 'Expired or invalid token' };

  return users;
};

const getUserById = async (token, id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 404, message: 'User does not exist' };

  const verify = tokenVerify(token, [user]);

  if (verify.error) return { status: 401, message: 'Expired or invalid token' };

  return user;
};

module.exports = {
  createUser,
  checkUserLogin,
  getAllUsers,
  getUserById,
};
