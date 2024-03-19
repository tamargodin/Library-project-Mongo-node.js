// controllers/ProductController.ts

import { Request, Response } from 'express';
import   BookModel,{Book}  from '../models/BookModel';

// Create a product
export const addBook = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};




export const searchBooks = async (req: Request, res: Response) => {
  const { keyword, author, genre } = req.query;
  try {
    const books: Book[] = await BookModel.find({
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { author: { $regex: author, $options: 'i' } },
        { genre: { $regex: genre, $options: 'i' } }
      ]
    });
    res.json(books);
  } catch (error) {
    res.status(400).send(error instanceof Error ? error.message : 'An error occurred');
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


export const updateBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deletetBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'book not found' });
    }
    res.json({ message: 'book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
