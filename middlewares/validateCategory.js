const validateName = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  /* if (name.length < 8) {
    return res.status(400).json({
      message: '"name" length must be at least 8 characters long',
    });
  } */
  next();
};

module.exports = [
  validateName,
];
