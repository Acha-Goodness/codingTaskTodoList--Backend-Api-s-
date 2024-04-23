const Todo = require("../Models/todoModel");
const catchAsync = require("../utils/catchAsync");

exports.createTodo = catchAsync( async (req, res, next) => {
    const newTodo = await Todo.create(req.body);

    res.status(200).json({
        status:"successful",
        data:{
            todo: newTodo
        }
    });
});

exports.getAllTodo = catchAsync( async (req, res, next) => {
    const todos = await Todo.find();

    res.status(200).json({
        status:"successful",
        result:todos.length,
        data:{
            todos: todos
        }
    });
});

exports.deleteTodo = catchAsync( async (req, res, next) => {
    await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status:"successful",
        message:"Todo deleted successfully"
    });
});