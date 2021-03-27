import { Router } from 'express';
import Todo from '../models/Todo';
// создание роутера для эндпоинта
const todosRouter = Router();

todosRouter.get('/', async (req, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

todosRouter.post('/', async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save((err) => {
    if (err) {
      res.status(400).send('Ошибка');
      return;
    }
  });
  res.send(todo);
});

export default todosRouter;
