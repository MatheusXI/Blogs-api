const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const Category = sequelize.define('Category', attributes, {
    timestamps: false,
    tablename: 'Categories',
  });

  return Category;
};
