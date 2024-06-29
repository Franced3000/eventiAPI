import { Request, Response } from 'express';
import EventService from '../services/eventService';

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await EventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await EventService.getAllEvents();
    return res.status(200).json(events);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export const getEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const eventId = parseInt(id, 10);
    if (isNaN(eventId)) {
      return res.status(400).json({ message: 'ID Evento non valido' });
    }
    const event = await EventService.getEventById(eventId);
    if (event) {
      return res.status(200).json(event);
    }
    return res.status(404).json({ message: 'Evento non trovato' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const eventId = parseInt(id, 10);
    const { titolo, descrizione, data, luogo, posti_disponibili } = req.body;
    const event = await EventService.getEventById(eventId);
    if (event) {
      event.titolo = titolo;
      event.descrizione = descrizione;
      event.data = data;
      event.luogo = luogo;
      event.posti_disponibili = posti_disponibili;
      await event.save();
      return res.status(200).json({ message: 'Evento aggiornato' });
    }
    return res.status(404).json({ message: 'Evento non trovato' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const eventId = parseInt(id, 10);
    const event = await EventService.getEventById(eventId);
    if (event) {
      await event.destroy();
      return res.status(200).json({ message: 'Evento cancellato' });
    }
    return res.status(404).json({ message: 'Evento non trovato' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};


