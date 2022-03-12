const { Datatypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: Datatypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: Datatypes.STRING,
  },
  content: {
    allowNull: false,
    type: Datatypes.STRING,
  },
  userId: {
    allowNull: false,
    type: Datatypes.INTEGER,
    foreingKey: true,
},
    published: Datatypes.DATE,
    updated: Datatypes.DATE,
};

module.exports = (sequelize, _DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', attributes, {
    timeStamps: false,
    tablename: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreingKey: 'userId',
      as: 'user',
    });
  };

  return BlogPost;
};
