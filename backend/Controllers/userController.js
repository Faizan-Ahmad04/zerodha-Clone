const bcrypt = require('bcrypt');
const { genrateJwtToken } = require('../util/auth');
const User = require('../model/UserModel');

const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ message: 'All fields are required', success: false });

  const user = await User.findOne({ email });
  if (user)
    return res
      .status(409)
      .json({ message: 'User already exists', success: false });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });

    if (newUser) newUser.save();
    return res.status(201).json({
      message: 'User successfully created',
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log('Server error', error);
    return res
      .status(500)
      .json({ message: 'Internal Server Error', success: false });
  }
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'All fields are required', success: false });

  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ message: 'User not found', success: false });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect)
    return res.status(401).json({ message: 'Not authorize', success: false });

  const token = genrateJwtToken(user.id);

  return res.cookie(token).status(200).json({ message: 'successfully login' });
};

module.exports = { handleUserSignup, handleUserLogin };
