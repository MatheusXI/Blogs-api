const { User } = require('../models');
const tokenGenerate = require('../auxFunctions/tokenGenerate');

const createUser = async (obj) => {
  const verifyUser = await User.findOne({ where: { email: obj.email } });

  if (verifyUser) return { message: 'User already registered' };

  const user = await User.create(obj);
  const token = tokenGenerate(obj);

  return { user, token };
};

module.exports = {
  createUser,
};
