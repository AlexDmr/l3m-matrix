import {MatrixInterface} from "./MatrixInterface";

function writeDoc(str: string): void {
  const section = document.createElement("section");
  document.body.insertBefore(section, document.querySelector("body > *"));
  section.innerHTML = `${str}<hr/>`;
  setTimeout( () => section.classList.add("log"), 100);
}

function MatrixToString(M: MatrixInterface): string {
  let str = `<table class="matrix"><tbody>`;
  const T = M.data.map( line => line.map( c => `<td>${c}</td>` ).join('') );
  str += T.map( line => `<tr>${line}</tr>` ).join('');
  str += "<tbody></table>";
  return str;
}

export function logCls() {
  document.body.innerHTML = "";
}

export function logMatrix(info: string, M: MatrixInterface): void {
  writeDoc( info + MatrixToString(M) );
}

export function logAddMatrix(info: string, ...LM: MatrixInterface[]): void {
    let str = LM.map( MatrixToString, '').join(" + ");
    let M = LM.reduce( (acc, m) => acc.add(m) );
    writeDoc( `${info} ${str} = ${MatrixToString(M)}` );
}

export function logMultiplyMatrix(info: string, ...LM: MatrixInterface[]): void {
    let str = LM.map( MatrixToString, '').join(" x ");
    let M = LM.reduce( (acc, m) => acc.multiply(m) );
    writeDoc( `${info} ${str} = ${MatrixToString(M)}` );
}


window['logMatrix']    = logMatrix;
window['logAddMatrix'] = logAddMatrix;
window['logMultiplyMatrix'] = logMultiplyMatrix;
window['logCls'] = logCls;
