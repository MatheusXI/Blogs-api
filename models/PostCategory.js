const attributes = {};

module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', attributes, {
    timestamps: false,
    tablename: 'PostsCategories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreingKey: 'categoryId',
      as: 'blogPost',
      through: PostCategory,
    });
    models.BlogPost.belongsToMany(models.Category, {
        foreingKey: 'postId',
        as: 'category',
        through: PostCategory,
      });
  };

  return PostCategory;
};
