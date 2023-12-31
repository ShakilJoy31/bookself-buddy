"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommentToBook = exports.updateBoookAccordingToId = exports.deleteBoookAccordingToId = exports.getSpecificBookById = exports.getBooks = exports.getLoggedInUsers = exports.getUsers = exports.createBooks = exports.createUser = void 0;
const bookself_service_1 = require("./bookself.service");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = req.body;
        const user = yield (0, bookself_service_1.createUserToDB)(data);
        res.status(200).json({
            status: 'success',
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.createUser = createUser;
const createBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = req.body;
        console.log(data);
        const user = yield (0, bookself_service_1.createBookToDB)(data);
        res.status(200).json({
            status: 'success',
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.createBooks = createBooks;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, bookself_service_1.getUsersFromDB)();
        console.log(user);
        res.status(200).json({
            status: 'success',
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.getUsers = getUsers;
const getLoggedInUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, bookself_service_1.getLoggedInUserFromDB)(email, password);
        if ((user === null || user === void 0 ? void 0 : user.email) === email && (user === null || user === void 0 ? void 0 : user.password) === password) {
            res.status(200).json({
                status: 'success',
                data: user
            });
        }
        else {
            res.status(400).json({
                status: 'failed',
                data: null
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.getLoggedInUsers = getLoggedInUsers;
const getBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield (0, bookself_service_1.getBooksFromDB)();
        console.log('hello');
        res.status(200).json({
            status: 'success',
            data: books
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.getBooks = getBooks;
// Getting particular book by Id
const getSpecificBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield (0, bookself_service_1.getSpecificBookFromDB)(id);
        res.status(200).json({
            status: 'success',
            data: book
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.getSpecificBookById = getSpecificBookById;
const deleteBoookAccordingToId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { deleteId } = req.params;
        const book = yield (0, bookself_service_1.deleteSpecificBookFromDB)(deleteId);
        console.log(book);
        res.status(200).json({
            status: 'success',
            data: book
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.deleteBoookAccordingToId = deleteBoookAccordingToId;
const updateBoookAccordingToId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const book = yield (0, bookself_service_1.updateSpecificBookFromDB)(id, updatedData);
        console.log(book);
        res.status(200).json({
            status: 'success',
            data: book
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.updateBoookAccordingToId = updateBoookAccordingToId;
const addCommentToBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const commentData = req.body;
        console.log(bookId, commentData);
        const book = yield (0, bookself_service_1.addCommentToBookDB)(bookId, commentData);
        res.status(200).json({
            status: 'success',
            data: book
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            data: error
        });
    }
});
exports.addCommentToBook = addCommentToBook;
