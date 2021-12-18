// Rain water trap

// In the first and last building we don't have any accumulation
// We need a wall on left and right for that
// water accumulated = min(leftMax, rightMax) - hight[i]

const solve = (A) => {
  let rightMaxArray = [],
    leftMaxArray = [],
    rightMax = 0,
    leftMax = 0;

  for (let i = 0; i < A.length; i++) {
    leftMax = Math.max(leftMax, A[i]);
    leftMaxArray.push(leftMax);
  }
  for (let i = A.length - 1; i > -1; i--) {
    rightMax = Math.max(rightMax, A[i]);
    rightMaxArray.unshift(rightMax);
  }
  let totalWater = 0;
  for (let i = 0; i < A.length; i++) {
    totalWater += Math.min(rightMaxArray[i], leftMaxArray[i]) - A[i];
  }

  console.log(leftMaxArray, rightMaxArray);

  return totalWater;
};

const A = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("input", A);
console.table(solve(A, 4));
