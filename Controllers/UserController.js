const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
//desc  get all user
//route get :api/user
//access private
const getUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

//desc Create new user
//route  post: api/user
//access private
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "all fields are required" });
  }
  const checkUser = await User.findOne({ email });

  if (!checkUser) {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    res.status(200).json({ message: `successfully created ` });
  }
  res.status(403).json({ message: "User already exists" });
});

//desc  update user
//route  Put: api/user/:id
//access private
const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const { username, email, password } = req.body;
  const user = await User.findById(id);

  // Check if the user exists
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // If provided, hash the new password
  let hashedPassword;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  // Update the user object
  if (username) user.username = username;
  if (email) user.email = email;
  if (hashedPassword) user.password = hashedPassword;

  // Save the updated user
  await user.save();

  res.status(200).json({ message: `Updated user successfully ${user}` });
});

//desc  delete   user
//route  delete: api/user/:id
//access private
const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await user.deleteOne();

  res.status(200).json({ message: `Deleted user with ID ${id}` });
});

module.exports = {
  getUser,
  updateUser,
  createUser,
  deleteUser,
};
