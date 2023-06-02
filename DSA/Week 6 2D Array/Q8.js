// Given two sparse matrices

// **Example 1:**

// **Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

// **Output:**

// [[7,0,0],[-7,0,3]]

const multiplySparseMatrices = (mat1, mat2) => {
  const m = mat1.length;
  const n = mat2[0].length;
  const result = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < mat1[0].length; k++) {
        result[i][j] += mat1[i][k] * mat2[k][j];
      }
    }
  }

  return result;
};

const mat1 = [
  [1, 0, 0],
  [-1, 0, 3],
];
const mat2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];
const result = multiplySparseMatrices(mat1, mat2);
console.log(result);
// Ouptut - [ [ 7, 0, 0 ], [ -7, 0, 3 ] ]
