import { Request, Response } from 'express';
import EventService from '../services/eventService';

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await EventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Altri metodi CRUD...
