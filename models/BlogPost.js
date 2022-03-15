const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    foreingKey: true,
  },
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
};

module.exports = (sequelize, _DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', attributes, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreingKey: 'userId',
      as: 'user',
    });
  };

  return BlogPost;
};
