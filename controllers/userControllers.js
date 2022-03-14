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
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const users = await userServices.getAllUsers(token);
    if (users.message) return res.status(401).json(users);
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server Error' });
  }
};

const getUserById = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const user = await userServices.getUserById(token, id);
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
