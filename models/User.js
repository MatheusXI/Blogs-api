const { Datatypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: Datatypes.INTEGER,
  },
  displayName: {
    allowNull: false,
    type: Datatypes.STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: Datatypes.STRING,
  },
  password: {
    allowNull: false,
    type: Datatypes.STRING,
  },
  image: {
    allowNull: false,
    type: Datatypes.STRING,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const User = sequelize.define('User', attributes, {
    timeStamps: false,
    tablename: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreingKey: 'userId',
      as: 'blogPost',
    });
  };
  
  return User;
};
