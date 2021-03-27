import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { signUpController } from '../controllers/auth-controller';
import User from '../models/User';
import { signUpValidator, testValidator } from '../validators/auth-validator';
import bcrypt from 'bcrypt';
// создание роутера для эндпоинта
const authRouter = Router();

// body - валидация
authRouter.post('/sign-up', testValidator, signUpValidator, signUpController);

// логин
authRouter.post(
  '/sign-in',
  body('email')
    .exists()
    .isEmail()
    .custom(async (value, { req }) => {
      // кастомная валидация
      const user = await User.findOne({ email: value });
      if (!user) {
        return Promise.reject('Неверные пароль или email');
      }

      // сравнение паролей
      const isValidated = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isValidated) {
        return Promise.reject('Неверные пароль или email');
      }
    }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }
    res.send({ validated: true });
  }
);

export default authRouter;
