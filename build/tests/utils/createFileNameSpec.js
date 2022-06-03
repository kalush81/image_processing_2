"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_file_name_1 = require("../../utils/create-file-name");
it('should create string "fjord200200.jpg" ', function () {
    var queryObj = { filename: "fjord", width: "200", height: "200" };
    var filename = (0, create_file_name_1.createFileName)(queryObj);
    expect(filename).toEqual("fjord200200.jpg");
});
