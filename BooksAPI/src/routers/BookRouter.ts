// routers/ProductRouter.ts

import express from 'express';
import * as BookController from '../controllers/BookController';

const router = express.Router();

router.post('/add', BookController.addBook);
router.get('/:id', BookController.getBookById);
router.put('/update/:bookId', BookController.updateBookById);
router.delete('/delete/:bookId', BookController.deletetBookById);

export default router;
