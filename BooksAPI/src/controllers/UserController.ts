import { Request, Response } from 'express';
import UserMOdel, { User } from '../models/‏‏UserModel';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser: User = await UserMOdel.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(400).send(error instanceof Error ? error.message : 'An error occurred');
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const user: User | null = await UserMOdel.findOne({ username, password });
    if (user) {
      res.send('Authentication successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(400).send(error instanceof Error ? error.message : 'An error occurred');
  }
};

export const updateUserProfile = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  try {
    const updatedUser: User | null = await UserMOdel.findByIdAndUpdate(userId, req.body, { new: true });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(400).send(error instanceof Error ? error.message : 'An error occurred');
  }
};