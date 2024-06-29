import express from 'express';
import { createRegistration } from '../controllers/registrationController';

const router = express.Router();

router.post('/', createRegistration);
// Altri percorsi CRUD...

export default router;
