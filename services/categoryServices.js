const { Category, User } = require('../models');
/* const tokenGenerate = require('../auxiliarFunctions/tokenG'); */
const tokenVerify = require('../auxiliarFunctions/verifyToken');

const createCategory = async (token, name) => {
  const users = await User.findAll();

  const verifyToken = tokenVerify(token, users);

  if (verifyToken.error) return { message: 'Expired or invalid token' };

  const newCategory = await Category.create({ name });
  console.log(newCategory, 'newCategory');
  return newCategory;
};

module.exports = {
    createCategory,
};
