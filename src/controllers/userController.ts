import { Request, Response } from 'express';
import UserService from '../services/userService';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10); 
    if (isNaN(userId)) {
      return res.status(400).json({ message: 'ID Utente non valido' });
    }
    const user = await UserService.getUserById(userId);
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json({ message: 'Utente non trovato' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10); 
    const { nome, cognome, email } = req.body;
    const user = await UserService.getUserById(userId);
    if (user) {
      user.nome = nome;
      user.cognome = cognome;
      user.email = email;
      await user.save();
      return res.status(200).json(user);
    }
    return res.status(404).json({ message: 'Utente non trovato' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);
    const user = await UserService.getUserById(userId);
    if (user) {
      await user.destroy();
      return res.status(200).json({ message: 'Utente cancellato' });
    }
    return res.status(404).json({ message: 'Utente non trovato' });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage })
}
};
