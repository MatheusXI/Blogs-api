const attributes = {};

module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', attributes, {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      as: 'blogPost',
      through: PostCategory,
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      through: PostCategory,
    });
  };

  return PostCategory;
};
