import express from 'express';
import { createRegistration, getAllRegistrations, getRegistration, deleteRegistration } from '../controllers/registrationController';
import { registrationValidator, idParamValidator } from '../utils/validators';

const router = express.Router();

router.post('/', registrationValidator, createRegistration);
router.get('/', getAllRegistrations);
router.get('/:id', idParamValidator, getRegistration);
router.delete('/:id', idParamValidator, deleteRegistration);

export default router;

