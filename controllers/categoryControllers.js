const categoryServices = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await categoryServices.createCategory(name);
    return res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const categories = await categoryServices.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryServices.getCategoryById(id);
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
};
