"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
exports.app = (0, express_1.default)();
exports.app.use(routes_1.default);
exports.app.use(function (_req, res) {
    res.status(404).send("path doesn't exist");
});
exports.app.use(function (err, req, res) {
    console.error(err);
    res
        .status(500)
        .send("Our dumb backend developer did somethng wrong. We are going to kick his as and fix the issue asap :");
});
exports.app.listen(3000, function () {
    console.log("app is running on port 3000");
});
