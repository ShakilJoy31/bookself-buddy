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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSpecificBookFromDB = exports.deleteSpecificBookFromDB = exports.getSpecificBookFromDB = exports.getBooksFromDB = exports.getLoggedInUserFromDB = exports.getUsersFromDB = exports.createBookToDB = exports.createUserToDB = void 0;
const bookself_model_1 = __importDefault(require("./bookself.model"));
const newbook_model_1 = __importDefault(require("./newbook.model"));
const createUserToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new bookself_model_1.default(payload);
        yield user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.createUserToDB = createUserToDB;
const createBookToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new newbook_model_1.default(payload);
        yield user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.createBookToDB = createBookToDB;
const getUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield bookself_model_1.default.find();
        return users;
    }
    catch (error) {
        throw error;
    }
});
exports.getUsersFromDB = getUsersFromDB;
const getLoggedInUserFromDB = (emailToFind, passwordToMatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield bookself_model_1.default.findOne({ email: emailToFind });
        if ((user === null || user === void 0 ? void 0 : user.password) === passwordToMatch) {
            return user;
        }
        else {
            return null;
        }
    }
    catch (error) {
        throw error;
    }
});
exports.getLoggedInUserFromDB = getLoggedInUserFromDB;
const getBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield newbook_model_1.default.find();
        return books;
    }
    catch (error) {
        throw error;
    }
});
exports.getBooksFromDB = getBooksFromDB;
const getSpecificBookFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield newbook_model_1.default.findOne({ _id: payload });
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.getSpecificBookFromDB = getSpecificBookFromDB;
const deleteSpecificBookFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield newbook_model_1.default.deleteOne({ _id: payload });
        if (result.deletedCount && result.deletedCount > 0) {
            return 'Book deleted successfully';
        }
        else {
            return 'Book delation failed';
        }
    }
    catch (error) {
        throw error;
    }
});
exports.deleteSpecificBookFromDB = deleteSpecificBookFromDB;
const updateSpecificBookFromDB = (bookId, updatedBookData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBook = yield newbook_model_1.default.findOneAndUpdate({ _id: bookId }, { $set: updatedBookData }, { new: true });
        if (updatedBook) {
            return 'Book updated successfully';
        }
        else {
            return 'Book update failed';
        }
    }
    catch (error) {
        throw error;
    }
});
exports.updateSpecificBookFromDB = updateSpecificBookFromDB;
