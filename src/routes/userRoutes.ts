import express from 'express';
import { createUser } from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
// Altri percorsi CRUD...

export default router;
