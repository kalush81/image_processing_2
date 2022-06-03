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
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const create_file_name_1 = require("../utils/create-file-name");
const validate_query_string_1 = require("./validate-query-string");
const process_image_1 = require("../utils/process-image");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const processed = "src/images/processed";
    const requestedFile = (0, create_file_name_1.createFileName)(req.data);
    const pathToFile = node_path_1.default.join(__dirname, "../../", processed, requestedFile);
    const imgFiles = yield promises_1.default.readdir(processed);
    if (!imgFiles.includes(requestedFile)) {
        try {
            yield (0, process_image_1.processImage)(validate_query_string_1.full, req.data, processed);
        }
        catch (error) {
            next(error);
        }
    }
    res.sendFile(pathToFile);
});
