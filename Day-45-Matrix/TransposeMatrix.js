// leetcode question -=> (867)

var transpose = function (matrix) {
  let ans = Array.from({ length: matrix[0].length }, () =>
    Array(matrix.length)
  );
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i].length; j++) {
      ans[i][j] = matrix[j][i];
    }
  }
  return ans;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix));
