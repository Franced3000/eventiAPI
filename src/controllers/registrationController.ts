import { Request, Response } from 'express';
import RegistrationService from '../services/registrationService';

export const createRegistration = async (req: Request, res: Response) => {
  try {
    const registration = await RegistrationService.createRegistration(req.body);
    res.status(201).json(registration);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
}

export const getAllRegistrations = async (req: Request, res: Response) => {
  try {
    const registrations = await RegistrationService.getAllRegistrations();
    return res.status(200).json(registrations);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
}

export const getRegistration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const registrationId = parseInt(id, 10); 
    if (isNaN(registrationId)) {
      return res.status(400).json({ message: 'ID Registrazione non valido' });
    }
    const registration = await RegistrationService.getRegistrationById(registrationId);
    if (registration) {
      return res.status(200).json(registration);
    }
    return res.status(404).json({ message: 'Registrazione non trovato' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};


export const deleteRegistration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const registrationId = parseInt(id, 10);
    const registration = await RegistrationService.getRegistrationById(registrationId);
    if (registration) {
      await registration.destroy();
      return res.status(200).json({ message: 'Registrazione cancellata' });
    }
    return res.status(404).json({ message: 'Registrazione non trovata' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};
