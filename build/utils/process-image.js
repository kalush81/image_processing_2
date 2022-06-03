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
exports.processImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const create_file_name_1 = require("./create-file-name");
const processImage = (from, imageQuery, to) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename, width, height } = imageQuery;
    const requestedFile = (0, create_file_name_1.createFileName)({ filename, width, height });
    const resized = yield (0, sharp_1.default)(`${from}/${filename}.jpg`).resize(Number(width), Number(height));
    const result = yield resized.toFile(`${to}/${requestedFile}`);
    return result;
});
exports.processImage = processImage;
