const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  try {
    const userInfo = await userServices.createUser(req.body);
    if (userInfo.message) return res.status(409).json(userInfo);
    return res.status(201).json({ token: userInfo.token });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal server error');
  }
};
module.exports = {
  createUser,
};
