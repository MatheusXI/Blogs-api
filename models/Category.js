const { Datatypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: Datatypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: Datatypes.STRING,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const Category = sequelize.define('Category', attributes, {
    timeStamps: false,
    tablename: 'Categories',
  });

  return Category;
};
