export interface MatrixInterface {
  data: number[][];
  add(M: MatrixInterface): MatrixInterface;
  transpose(): MatrixInterface;
  multiply(M: MatrixInterface): MatrixInterface;
}