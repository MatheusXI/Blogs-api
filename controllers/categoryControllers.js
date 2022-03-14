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
module.exports = {
  createCategory,
};
