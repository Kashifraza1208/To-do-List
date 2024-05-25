const express = require("express");
const {
  createTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
  getSingleTodo,
} = require("../controllers/todoController");
const router = express.Router();

router.route("/task/new").post(createTodo);
router.route("/tasks").get(getAllTodo);
router.route("/task/:id").get(getSingleTodo);

router.route("/task/:id").delete(deleteTodo);
router.route("/task/:id").put(updateTodo);

module.exports = router;
