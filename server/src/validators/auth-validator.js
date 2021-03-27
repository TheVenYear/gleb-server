import { body } from 'express-validator';
import { createvalidator } from '../middlewares/validator-middleware';

export const signUpValidator = createvalidator([
  body('email').exists().isEmail(),
  body('password').exists().isLength({ min: 8 }),
]);
