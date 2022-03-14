const { Category } = require('../models');
/* const tokenGenerate = require('../auxiliarFunctions/tokenG'); */

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  
  return newCategory;
};

module.exports = {
  createCategory,
};
