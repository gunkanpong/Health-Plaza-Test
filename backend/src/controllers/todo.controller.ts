import { Request, Response } from 'express';
import * as todoService from '../service/todo.service';

export const getAllTodos = (req: Request, res: Response): void => {
  const todos = todoService.getAllTodos();
  res.json(todos);
};

export const createTodo = (req: Request, res: Response): void => {
  const newTodo = req.body;
  const createdTodo = todoService.createTodo(newTodo);
  res.status(201).json(createdTodo);
};

export const updateTodo = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;
  const todo = todoService.updateTodo(id, updatedTodo);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const deleteTodo = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const deleted = todoService.deleteTodo(id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};
