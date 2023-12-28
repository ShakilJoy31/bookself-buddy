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
exports.getUsers = exports.createUser = void 0;
const bookself_service_1 = require("./bookself.service");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        name: 'Shakil',
        email: 'shakil@gmail.com',
        phone: '0123478975',
        password: '12345'
    };
    const user = yield (0, bookself_service_1.createUserToDB)(data);
    res.status(200).json({
        status: 'success',
        data: user
    });
});
exports.createUser = createUser;
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, bookself_service_1.getUsersFromDB)();
    res.status(200).json({
        status: 'success',
        data: user
    });
});
exports.getUsers = getUsers;
