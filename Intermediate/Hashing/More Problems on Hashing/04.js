// Given N elements, find the length of the longest sequence, which can be strictly arranged in the order of one

const solve = (A) => {
  A = A.sort((a, b) => a - b);
  let result = 0;
  let count = 1;
  console.log(A);
  let mySet = new Set();

  for (let i = 0; i < A.length; i++) {
    mySet.add(A[i]);
  }

  A = Array.from(mySet);
  // don't iterate on the original array
  for (let i = 0; i < A.length; i++) {
    if (mySet.has(A[i] - 1)) {
      continue;
    } else {
      let j = A[i] + 1;
      while (mySet.has(j)) {
        count++;
        j++;
      }
    }
    result = Math.max(result, count);
    count = 1;
  }

  return result;
};

//const A = [-1, 8, 2, 3, 7, 1, 4, 9, 3, 2];
const A = [9, -1, -3, 7, 0, 6, -2, 12, 13, 14, 15, 1, 6, 8, 16, 5, 10];
console.log("length of array", A.length);
console.table(solve(A));
