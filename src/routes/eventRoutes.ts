import express from 'express';
import { createEvent, getAllEvents, getEvent, updateEvent, deleteEvent } from '../controllers/eventController';
import { eventValidator, idParamValidator } from '../utils/validators';

const router = express.Router();

router.post('/', eventValidator, createEvent);
router.get('/', getAllEvents);
router.get('/:id', idParamValidator, getEvent);
router.put('/:id', idParamValidator, eventValidator, updateEvent);
router.delete('/:id', idParamValidator, deleteEvent);

export default router;
