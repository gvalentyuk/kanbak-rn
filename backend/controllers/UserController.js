const User = require("../models/User");
const asyncHandler = require("../middlewares/asyncHandler");
const generateJWT = require("../utils/generateJWT");
const { restart } = require("nodemon");

//@route    POST /api/user/registration
//@access   Public
//@desc     Register user
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(401).json({ error: "User already exist" });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      tasks: user.tasks,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400).json({ error: "Invalid data" });
  }
});

//@route    POST /api/user/login
//@access   Public
//@desc     Login user
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (user && (await user.matchPasswords(password))) {
    return res.status(200).json({
      name: user.name,
      email: user.email,
      id: user._id,
      tasks: user.tasks,
      token: generateJWT(user._id),
    });
  } else {
    return res.status(401).json({ error: "Invalid data" });
  }
});
