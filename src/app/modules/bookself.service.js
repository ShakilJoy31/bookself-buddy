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
exports.getSpecificBookFromDB = exports.getBooksFromDB = exports.getUsersFromDB = exports.createBookToDB = exports.createUserToDB = void 0;
const bookself_model_1 = __importDefault(require("./bookself.model"));
const newbook_model_1 = __importDefault(require("./newbook.model"));
const createUserToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const user = new bookself_model_1.default(payload);
    yield user.save();
    return user;
});
exports.createUserToDB = createUserToDB;
const createBookToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const user = new newbook_model_1.default(payload);
    yield user.save();
    return user;
});
exports.createBookToDB = createBookToDB;
const getUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield bookself_model_1.default.find();
    return users;
});
exports.getUsersFromDB = getUsersFromDB;
const getBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield newbook_model_1.default.find();
    return books;
});
exports.getBooksFromDB = getBooksFromDB;
const getSpecificBookFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield newbook_model_1.default.findOne({ _id: payload });
    return user;
});
exports.getSpecificBookFromDB = getSpecificBookFromDB;
