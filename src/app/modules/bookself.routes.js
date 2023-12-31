"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookself_controller_1 = require("./bookself.controller");
const router = express_1.default.Router();
// !Routes for the users
router.post("/create-bookself-user", bookself_controller_1.createUser);
router.get("/get-bookself-user", bookself_controller_1.getUsers);
router.post("/get-loggedin-user", bookself_controller_1.getLoggedInUsers);
// !Routes for the books
router.post("/create-new-book", bookself_controller_1.createBooks);
router.get("/get-books", bookself_controller_1.getBooks);
router.get("/get-book/:id", bookself_controller_1.getSpecificBookById);
// !Routes for the delete operation 
router.delete("/delete-book/:deleteId", bookself_controller_1.deleteBoookAccordingToId);
// !Routes for the update operation
router.put("/update-book/:id", bookself_controller_1.updateBoookAccordingToId);
router.put("/add-comment/:bookId", bookself_controller_1.addCommentToBook);
exports.default = router;
