const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  try {
    const userInfo = await userServices.createUser(req.body);
    if (userInfo.message) return res.status(409).json(userInfo);
    return res.status(201).json(userInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal server error');
  }
};

const checkUserLogin = async (req, res) => {
  try {
    const userInfo = await userServices.checkUserLogin(req.body);
    if (userInfo.message) return res.status(400).json(userInfo);
    return res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server Error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server Error' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userServices.getUserById(id);
    if (user.message) return res.status(user.status).json({ message: user.message });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  checkUserLogin,
  getAllUsers,
  getUserById,
};
