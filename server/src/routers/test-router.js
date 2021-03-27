import { Router } from 'express';
// создание роутера для эндпоинта
const testRouter = Router();

// endpoint get '/' req - запрос res - ответ
testRouter.get('/', (req, res) => {
  res.send('hello world');
});

testRouter.get('/lox', (req, res) => {
  res.send('ti lox');
});

testRouter.post('/lox', (req, res) => {
  res.send(req.body);
});

export default testRouter;
