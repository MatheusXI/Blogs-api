const blogPostServices = require('../services/blogPostServices');

const createPost = async (req, res) => {
  const {
    dataValues: { id },
  } = req.token;
  try {
    const post = await blogPostServices.createPost(req.body, id);
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await blogPostServices.getAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
