import express from 'express';

import {
  createBooks,
  createUser,
  deleteBoookAccordingToId,
  getBooks,
  getLoggedInUsers,
  getSpecificBookById,
  getUsers,
  updateBoookAccordingToId,
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

// !Routes for the delete operation 
router.delete("/delete-book/:deleteId", deleteBoookAccordingToId);

// !Routes for the update operation
router.put("/update-book/:id", updateBoookAccordingToId);

export default router;