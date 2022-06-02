"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileName = void 0;
function createFileName(obj) {
    return Object.values(obj).join(",").replaceAll(",", "").concat(".jpg");
}
exports.createFileName = createFileName;
