"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import stylesheets
const Matrix_1 = require("./Matrix");
const ihmMatrix_1 = require("./ihmMatrix");
const M1 = (window["M1"] = new Matrix_1.Matrix([[1, 2, 3], [4, 5, 6]]));
const M2 = (window["M2"] = new Matrix_1.Matrix([[10, 11], [12, 13], [14, 15]]));
const M3 = (window["M3"] = new Matrix_1.Matrix([[2, 0], [0, 3]]));
let M2t;
console.log(M1, M2);
ihmMatrix_1.logMatrix("M1 = ", M1);
ihmMatrix_1.logMatrix("M2 = ", M2);
ihmMatrix_1.logMatrix("M3 = ", M3);
ihmMatrix_1.logMatrix("M2t = ", M2t = M2.transpose());
ihmMatrix_1.logAddMatrix("M1 + M2t = ", M1, M2.transpose());
ihmMatrix_1.logMatrix("M2t = ", M2.transpose());
ihmMatrix_1.logAddMatrix("M1 + M2 = ", M1, M2);
ihmMatrix_1.logAddMatrix("M1 + M2t = ", M1, M2.transpose());
ihmMatrix_1.logAddMatrix("M1 + M2.transpose() + M1 = ", M1, M2.transpose(), M1);
ihmMatrix_1.logMultiplyMatrix("M1 x M2 = ", M1, M2);
//# sourceMappingURL=index.js.map