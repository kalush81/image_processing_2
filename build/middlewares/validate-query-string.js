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
exports.validateQueryStrings = exports.full = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
exports.full = "src/images/full";
const validateQueryStrings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const obj = req.query;
    if (obj.filename && obj.width && obj.height) {
        try {
            const imgFiles = yield promises_1.default.readdir(exports.full);
            if (imgFiles.includes(obj.filename + ".jpg")) {
                req.data = obj;
                try {
                    yield promises_1.default.mkdir('src/images/processed');
                }
                catch (error) {
                    console.log(error);
                }
                return next();
            }
            return res.status(400).send(`Image ${obj.filename} does not exist`);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send("internall server error");
        }
    }
    res.status(400).send("Insuficient params");
});
exports.validateQueryStrings = validateQueryStrings;
