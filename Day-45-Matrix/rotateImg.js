let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(matrix) {
  // Transpose the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < matrix.length; i++) {
    let k = 0;
    let j = matrix[i].length - 1;
    while (k < j) {
      let temp = matrix[i][k];
      matrix[i][k] = matrix[i][j];
      matrix[i][j] = temp;
      k++;
      j--;
    }
  }

  return matrix;
}

console.log(rotate(matrix));

