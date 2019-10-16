import {MatrixInterface} from "./MatrixInterface";

export class Matrix implements MatrixInterface {
  data: number[][];
  constructor(d: number[][]) {
    this.data = d;
  }
  add(M: MatrixInterface): MatrixInterface {
    return this;
  }
  transpose(): MatrixInterface {
    // suppose une matrice non vide
    // Initialisation d'un tableau résultat
    return this;
  }
  multiply(M: MatrixInterface): MatrixInterface {
   return this;
  }

}
