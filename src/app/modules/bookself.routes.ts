import express from 'express';

import {
  createUser,
  getUsers,
} from './bookself.controller';

const router = express.Router();

router.post("/create-bookself-user", createUser);
router.get("/get-bookself-user", getUsers);

export default router; 