import { body, param } from 'express-validator';

export const eventValidator = [
  body('titolo')
    .notEmpty()
    .withMessage('Il titolo è obbligatorio')
    .isString()
    .withMessage('Il titolo deve essere una stringa'),
  body('descrizione')
    .optional()
    .isString()
    .withMessage('La descrizione deve essere una stringa'),
  body('data')
    .notEmpty()
    .withMessage('La data è obbligatoria')
    .isISO8601()
    .withMessage('La data deve essere in formato ISO 8601'),
  body('luogo')
    .notEmpty()
    .withMessage('Il luogo è obbligatorio')
    .isString()
    .withMessage('Il luogo deve essere una stringa'),
  body('posti_disponibili')
    .isInt({ min: 1 })
    .withMessage('I posti disponibili devono essere almeno 1'),
];

export const userValidator = [
  body('nome')
    .notEmpty()
    .withMessage('Il nome è obbligatorio')
    .isString()
    .withMessage('Il nome deve essere una stringa'),
  body('cognome')
    .notEmpty()
    .withMessage('Il cognome è obbligatorio')
    .isString()
    .withMessage('Il cognome deve essere una stringa'),
  body('email')
    .notEmpty()
    .withMessage('L\'email è obbligatoria')
    .isEmail()
    .withMessage('Formato email non valido'),
  body('password')
    .notEmpty()
    .withMessage('La password è obbligatoria')
    .isLength({ min: 6 })
    .withMessage('La password deve essere lunga almeno 6 caratteri'),
];

export const registrationValidator = [
  body('evento_id')
    .notEmpty()
    .withMessage('L\'ID dell\'evento è obbligatorio')
    .isInt()
    .withMessage('L\'ID dell\'evento deve essere un numero intero'),
  body('utente_id')
    .notEmpty()
    .withMessage('L\'ID dell\'utente è obbligatorio')
    .isInt()
    .withMessage('L\'ID dell\'utente deve essere un numero intero'),
];

export const idParamValidator = [
  param('id')
    .isInt()
    .withMessage('L\'ID deve essere un numero intero'),
];
