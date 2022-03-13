const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  displayName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const User = sequelize.define('User', attributes, {
    timestamps: false,
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
