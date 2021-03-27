import bcrypt from 'bcrypt';
import User from '../models/User';

export const signUpController = async (req, res) => {
  // Соль - дополнение к шифру
  const salt = await bcrypt.genSalt(10);

  // байтвое перемножение
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // // Сравнение паролей
  // const compared = await bcrypt.compare(req.body.password, hashedPassword);
  // Возвращение объекта

  // Создание экземпляра пользователя
  const user = new User({ email: req.body.email, password: hashedPassword });

  // Добавление в бд
  await user.save((err) => {
    if (err) {
      res.status(401).send('hui');
      return;
    }
  });
  res.send(user);
};
