import { body } from 'express-validator';

export const eventValidator = [
  body('titolo').notEmpty().withMessage('Il titolo è obbligatorio'),
  body('data').isDate().withMessage('La data non è valida'),
  // Altri validatori...
];
