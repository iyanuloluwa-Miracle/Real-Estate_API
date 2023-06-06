//Very Important
require("../models/database");
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateToken } = require('../utils/authUtils');

exports.register = async (req, res) => {
  try {
    const { name, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({ name, password: hashedPassword });

    res.status(201).json({ success: true, data: user, message: 'User registration Successful' });
  } catch (err) {
    res.status(400).json({ error: err.message , message: 'User registration Failed!' });
  }
};

exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;

    // Find the user by name
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username!' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid provide, Provide the correct Password!' });
    }

    // Generate and send the JWT token
    const token = generateToken(user);

    res.status(200).json({ success: "You Logged In Successfully!", token });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};


exports.logout = async (req, res) => {
    try {
      // Clear the token cookie
      res.clearCookie('token');
  
      res.status(200).json({ message: 'Logged out successfully! Thank You for using our Application' });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  };