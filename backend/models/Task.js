const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
  },
  cost: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["todo", "progress", "done"],
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = model("Task", TaskSchema);
