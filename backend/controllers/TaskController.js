const Task = require("../models/Task");
const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/User");

//@route    POST /api/task
//@access   Private
//@desc     Post new task
exports.postTask = asyncHandler(async (req, res, next) => {
  const task = new Task({
    ...req.body,
    user: req.user._id,
  });
  await task.save();
  const tasks = await Task.find({ user: req.user._id });
  return res.status(201).json({ list: tasks });
});

//@route    GET /api/task
//@access   Private
//@desc     Get tasks
exports.getTasks = asyncHandler(async (req, res, next) => {
  const list = await Task.find({ user: req.user._id });
  return res.status(200).json({ list });
});

//@route    PUT /api/task
//@access   Private
//@desc     Update task status
exports.updateTask = asyncHandler(async (req, res, next) => {
  let task;
  const { status } = req.body;
  if (status === "done") {
    task = await Task.findByIdAndUpdate(
      req.body.id,
      {
        status: req.body.status,
        time: req.body.time,
        cost: req.body.time * 10.4,
      },
      {
        new: true,
        runValidators: true,
      }
    );
  } else {
    task = await Task.findByIdAndUpdate(
      req.body.id,
      { status: req.body.status, time: req.body.time },
      {
        new: true,
        runValidators: true,
      }
    );
  }
  const list = await Task.find({ user: req.user._id });
  return res.status(200).json({ list });
});
