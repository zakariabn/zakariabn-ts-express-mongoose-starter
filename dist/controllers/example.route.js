"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.exampleRoutes = express_1.default.Router();
exports.exampleRoutes.use("/", (req, res) => {
    res.send("You are in example route");
});
