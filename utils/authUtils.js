require('dotenv').config();
const jwt = require('jsonwebtoken');
const generateToken = (user) => {
  const payload = {
    userId: user._id,
    name: user.name,
  };

  const options = {
    expiresIn: '3h',
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid token');
  }
};

module.exports = { generateToken, verifyToken };
