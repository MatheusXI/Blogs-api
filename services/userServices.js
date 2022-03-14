const { User } = require('../models');
const tokenGenerate = require('../auxFunctions/tokenGenerate');

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

module.exports = {
  createUser,
  checkUserLogin,
};
