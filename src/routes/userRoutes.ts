import express from 'express';
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/userController';
import { userValidator, idParamValidator } from '../utils/validators';

const router = express.Router();

router.post('/', userValidator, createUser);
router.get('/', getAllUsers);
router.get('/:id', idParamValidator, getUser);
router.put('/:id', idParamValidator, userValidator, updateUser);
router.delete('/:id', idParamValidator, deleteUser);

export default router;
