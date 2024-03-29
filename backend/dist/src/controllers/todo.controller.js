"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.addTodo = exports.getAllTodos = void 0;
let todos = [];
const getAllTodos = (req, res) => {
    res.status(200).json(todos);
};
exports.getAllTodos = getAllTodos;
const addTodo = (req, res) => {
    const { todo } = req.body;
    todos.push(todo);
    res.status(201).send('Todo added successfully');
};
exports.addTodo = addTodo;
const deleteTodo = (req, res) => {
    const { index } = req.params;
    const todoIndex = parseInt(index, 10);
    if (isNaN(todoIndex) || todoIndex < 0 || todoIndex >= todos.length) {
        res.status(400).send('Invalid todo index');
    }
    else {
        todos.splice(todoIndex, 1);
        res.status(200).send('Todo deleted successfully');
    }
};
exports.deleteTodo = deleteTodo;
