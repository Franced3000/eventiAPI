import { Request, Response } from 'express';
import RegistrationService from '../services/registrationService';

export const createRegistration = async (req: Request, res: Response) => {
  try {
    const registration = await RegistrationService.createRegistration(req.body);
    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Altri metodi CRUD...
