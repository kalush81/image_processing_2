"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_query_string_1 = require("../../middlewares/validate-query-string");
const process_image_1 = __importDefault(require("../../middlewares/process-image"));
const routes = express_1.default.Router();
routes.get("/images", validate_query_string_1.validateQueryStrings, process_image_1.default);
exports.default = routes;
