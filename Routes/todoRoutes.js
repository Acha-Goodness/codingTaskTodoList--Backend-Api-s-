const express = require("express");
const { createTodo, getAllTodo, deleteTodo } = require("../controllers/todoController");

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/getAllTodo", getAllTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;