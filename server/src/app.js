import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import testRouter from './routers/test-router';

// Запуск dotenv и считывает файл .env
dotenv.config();

// Считывание порта из файла .env или параметров запуска
const PORT = process.env.PORT || 8000;

const app = express();

// Для понимания сервром json. Лимит для защиты от ддос
app.use(express.json({ limit: '30mb' }));

// Для защиты
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// Зашита и вайтлист адресов
app.use(cors());

// Использование роутера
app.use('/test', testRouter);

// Подключение к базе
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Если получилось подключиться к бд - запускаем сервер
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
mongoose.set('useFindAndModify', false);
