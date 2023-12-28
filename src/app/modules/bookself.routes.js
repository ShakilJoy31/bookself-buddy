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
exports.default = router;
