import { validationResult } from 'express-validator';

export const createvalidator = (validator, status = 400) => [
  ...validator,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(status).json({ errors: errors.array() });
    }
    next();
  },
];
