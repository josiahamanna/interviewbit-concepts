// Given N elements, find the length of the longest sequence, which can be strictly arranged in the order of one

const solve = (A) => {
  A = A.sort((a, b) => a - b);
  let result = 0;
  let count = 1;
  console.log(A);
  for (let i = 0; i < A.length - 1; i++) {
    //if the elements are same; don't break, continue
    // you can also remove duplicates using hash set
    if (A[i + 1] === A[i]) {
      continue;
    }
    if (A[i + 1] === A[i] + 1) {
      count++;
    } else {
      result = Math.max(count, result);
      count = 1;
    }
  }
  result = Math.max(count, result);
  return result;
};

const A = [-1, 8, 2, 3, 7, 1, 4, 9, 3, 2];
console.log("length of array", A.length);
console.table(solve(A));
