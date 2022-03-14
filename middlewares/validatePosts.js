const { Category } = require('../models');

const validateTitle = async (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  /* if (title.length < 8) {
    return res.status(400).json({
      message: '"title" length must be at least 8 characters long',
    });
  } */
  next();
};

const validateContent = async (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  /* if (content.length < 8) {
      return res.status(400).json({
        message: '"content" length must be at least 8 characters long',
      });
    } */
  next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await Category.findAll();
  const mapa = categories.map((obj) => obj.dataValues.id);
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  const verifyCategory = categoryIds.every((id) => mapa.includes(id));

  if (!verifyCategory) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = [validateTitle, validateContent, validateCategoryIds];
