import express from 'express';

import {
  createBooks,
  createUser,
  getBooks,
  getSpecificBookById,
  getUsers,
} from './bookself.controller';

const router = express.Router();

router.post("/create-bookself-user", createUser);
router.get("/get-bookself-user", getUsers);
 
router.post("/create-new-book", createBooks);
router.get("/get-books", getBooks);
router.get("/get-book/:id", getSpecificBookById);

export default router;