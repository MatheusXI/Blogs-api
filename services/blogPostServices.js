const { BlogPost, User, Category } = require('../models');
const PostCategory = require('../models/PostCategory');

const createPost = async (obj, id) => {
  const newObj = { ...obj, userId: id };
  const post = await BlogPost.create(newObj);
  return post;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['UserId'] },
    include: [
      {
        model: User,
        as: 'user',
      
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return posts;
};

module.exports = {
  createPost,
  getAllPosts,
};
