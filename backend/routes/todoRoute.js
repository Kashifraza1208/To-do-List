const express = require("express");
const {
  createTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
  getSingleTodo,
} = require("../controllers/todoController");
const router = express.Router();

router.route("/tasks").post(createTodo);
router.route("/tasks").get(getAllTodo);
router.route("/tasks/:id").get(getSingleTodo);

router.route("/tasks/:id").delete(deleteTodo);
router.route("/tasks/:id").put(updateTodo);

module.exports = router;
