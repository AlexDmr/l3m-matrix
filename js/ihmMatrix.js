"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function writeDoc(str) {
    const section = document.createElement("section");
    document.body.insertBefore(section, document.querySelector("body > *"));
    section.innerHTML = `${str}<hr/>`;
    setTimeout(() => section.classList.add("log"), 100);
}
function MatrixToString(M) {
    let str = `<table class="matrix"><tbody>`;
    const T = M.data.map(line => line.map(c => `<td>${c}</td>`).join(''));
    str += T.map(line => `<tr>${line}</tr>`).join('');
    str += "<tbody></table>";
    return str;
}
function logCls() {
    document.body.innerHTML = "";
}
exports.logCls = logCls;
function logMatrix(info, M) {
    writeDoc(info + MatrixToString(M));
}
exports.logMatrix = logMatrix;
function logAddMatrix(info, ...LM) {
    let str = LM.map(MatrixToString, '').join(" + ");
    let M = LM.reduce((acc, m) => acc.add(m));
    writeDoc(`${info} ${str} = ${MatrixToString(M)}`);
}
exports.logAddMatrix = logAddMatrix;
function logMultiplyMatrix(info, ...LM) {
    let str = LM.map(MatrixToString, '').join(" x ");
    let M = LM.reduce((acc, m) => acc.multiply(m));
    writeDoc(`${info} ${str} = ${MatrixToString(M)}`);
}
exports.logMultiplyMatrix = logMultiplyMatrix;
window['logMatrix'] = logMatrix;
window['logAddMatrix'] = logAddMatrix;
window['logMultiplyMatrix'] = logMultiplyMatrix;
window['logCls'] = logCls;
//# sourceMappingURL=ihmMatrix.js.map