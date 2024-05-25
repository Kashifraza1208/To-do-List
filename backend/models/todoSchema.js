const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duedate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "In-Progress", "Completed"],
    default: "Pending",
  },
});

const TodoList = mongoose.model("TodoList", todoSchema);
module.exports = TodoList;
