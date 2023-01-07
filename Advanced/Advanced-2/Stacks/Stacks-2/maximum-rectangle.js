/*
Given a 2D binary matrix of integers A containing 0's and 1's of size N x M.

Find the largest rectangle containing only 1's and return its area.

Note: Rows are numbered from top to bottom and columns are numbered from left to right.
*/

const solve = (A) => {
  let maxAreaHistogramArr = [];

  // solving max area under histogram
  const maxAreaHistogram = (B) => {
    let s = [],
      rightMin = [],
      leftMin = [],
      result = 0;
    for (i = 0; i < B.length; i++) {
      while (s.length && B[s[s.length - 1]] >= B[i]) {
        s.pop();
      }

      if (!s.length) leftMin.push(-1);
      else leftMin.push(s[s.length - 1]);

      s.push(i);
    }

    s = [];

    for (i = B.length - 1; i > -1; i--) {
      while (s.length && B[s[s.length - 1]] >= B[i]) {
        s.pop();
      }

      if (!s.length) rightMin.push(B.length);
      else rightMin.push(s[s.length - 1]);

      s.push(i);
    }

    rightMin = rightMin.reverse();

    for (let i = 0; i < B.length; i++) {
      result = Math.max(result, (rightMin[i] - leftMin[i] - 1) * B[i]);
    }

    return result;
  };

  let rowSum = [];

  // Create histograms, and solve for each;
  // first row will be as it is
  // Next rows will be adding previous height only if the base has value 1.
  // if the base has 0, then we don't add it.
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (i === 0) {
        rowSum[j] = A[i][j];
      } else {
        if (A[i][j] === 0) {
          rowSum[j] = 0;
        } else {
          rowSum[j] = rowSum[j] + 1;
        }
      }
    }
    console.log("rowSum", rowSum);

    maxAreaHistogramArr.push(maxAreaHistogram(rowSum));
  }

  return Math.max(...maxAreaHistogramArr);
};

/* console.log(
  solve([
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 1],
  ])
); */

console.log(
  solve([
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ])
);
