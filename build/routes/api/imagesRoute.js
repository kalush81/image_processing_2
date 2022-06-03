"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validate_query_string_1 = require("../../middlewares/validate-query-string");
var process_image_1 = __importDefault(require("../../middlewares/process-image"));
var routes = express_1.default.Router();
routes.get("/images", validate_query_string_1.validateQueryStrings, process_image_1.default);
exports.default = routes;
