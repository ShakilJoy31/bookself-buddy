"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookself_controller_1 = require("./bookself.controller");
const router = express_1.default.Router();
router.post("/create-bookself-user", bookself_controller_1.createUser);
router.get("/get-bookself-user", bookself_controller_1.getUsers);
router.post("/create-new-book", bookself_controller_1.createBooks);
router.get("/get-books", bookself_controller_1.getBooks);
router.get("/get-book/:id", bookself_controller_1.getSpecificBookById);
exports.default = router;
