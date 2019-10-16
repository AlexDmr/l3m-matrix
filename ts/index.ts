// Import stylesheets
import { Matrix } from "./Matrix";
import {MatrixInterface} from './MatrixInterface';
import { logMatrix, logAddMatrix, logMultiplyMatrix } from "./ihmMatrix";

const M1 = (window["M1"] = new Matrix([[1, 2, 3], [4, 5, 6]]));
const M2 = (window["M2"] = new Matrix([[10, 11], [12, 13], [14, 15]]));
const M3 = (window["M3"] = new Matrix([[2, 0], [0, 3]]));
let M2t: MatrixInterface;

console.log(M1, M2);

logMatrix("M1 = ", M1);
logMatrix("M2 = ", M2);
logMatrix("M3 = ", M3);

logMatrix("M2t = ", M2t = M2.transpose());
logAddMatrix("M1 + M2t = ", M1, M2.transpose());

logMatrix("M2t = ", M2.transpose());
logAddMatrix("M1 + M2 = ", M1, M2);
logAddMatrix("M1 + M2t = ", M1, M2.transpose());
logAddMatrix("M1 + M2.transpose() + M1 = ", M1, M2.transpose(), M1);
logMultiplyMatrix("M1 x M2 = ", M1, M2);
