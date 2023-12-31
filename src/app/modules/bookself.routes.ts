import express from 'express';

import {
  createBooks,
  createUser,
  getBooks,
  getLoggedInUsers,
  getSpecificBookById,
  getUsers,
} from './bookself.controller';

const router = express.Router();
// !Routes for the users
router.post("/create-bookself-user", createUser);
router.get("/get-bookself-user", getUsers);
router.post("/get-loggedin-user", getLoggedInUsers);
 

// !Routes for the books
router.post("/create-new-book", createBooks);
router.get("/get-books", getBooks);
router.get("/get-book/:id", getSpecificBookById);

export default router;