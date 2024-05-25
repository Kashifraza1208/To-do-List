const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const TodoList = require("../models/todoSchema");

//create todo
exports.createTodo = catchAsyncErrors(async (req, res, next) => {
  const { title, description, duedate, status } = req.body;
  console.log(status);
  const todo = await TodoList.create({
    title,
    description,
    duedate,
    status,
  });

  res.status(201).json({
    success: true,
    todo,
  });
});

//get all todos
exports.getAllTodo = catchAsyncErrors(async (req, res, next) => {
  const todos = await TodoList.find({});

  res.status(200).json({
    success: true,
    todos,
  });
});

//get single task
exports.getSingleTodo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const todo = await TodoList.findById(id);

  if (!todo) {
    return next(
      new ErrorHandler(`todo dose not exist with id ${req.params.id}.`, 404)
    );
  }

  res.status(200).json({
    success: true,
    todo,
  });
});

//delete todo
exports.deleteTodo = catchAsyncErrors(async (req, res, next) => {
  const todoId = req.params.id;
  const todo = await TodoList.findById(todoId);
  if (!todo) {
    return next(
      new ErrorHandler(`todo dosen't exist with id: ${req.params.id}`, 404)
    );
  }

  await todo.deleteOne();
  res.status(200).json({
    success: true,
    messate: "Task Deleted Successfully",
  });
});

//update todo
exports.updateTodo = catchAsyncErrors(async (req, res, next) => {
  const newTodo = {
    title: req.body.title,
    description: req.body.description,
    duedate: req.body.date,
    status: req.body.status,
  };

  await TodoList.findByIdAndUpdate(req.params.id, newTodo, {
    new: true,
    runValidators: true,
    userFindAndModify: true,
  });

  res.status(200).json({
    success: true,
    messate: "Task Updated Successfully",
  });
});
