const { User } = require('../models');
const tokenGenerate = require('../auxiliarFunctions/tokenG');

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

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 404, message: 'User does not exist' };

  return user;
};

module.exports = {
  createUser,
  checkUserLogin,
  getAllUsers,
  getUserById,
};
