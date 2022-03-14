const categoryServices = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const token = req.headers.authorization;
  const { name } = req.body;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const newCategory = await categoryServices.createCategory(token, name);
    if (newCategory.message) return res.status(401).json(newCategory);
    return res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = {
  createCategory,
};
