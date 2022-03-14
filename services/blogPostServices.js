const { BlogPost } = require('../models');

const createPost = async (obj, id) => {
  const newObj = { ...obj, userId: id };
  const post = await BlogPost.create(newObj);
  return post;
};

module.exports = {
  createPost,
};
