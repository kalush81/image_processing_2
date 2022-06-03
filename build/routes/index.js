"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imagesRoute_1 = __importDefault(require("./api/imagesRoute"));
const routes = express_1.default.Router();
routes.use("/api", imagesRoute_1.default);
routes.get("/", (_req, res) => {
    res.send("home page of processing image app");
});
exports.default = routes;
