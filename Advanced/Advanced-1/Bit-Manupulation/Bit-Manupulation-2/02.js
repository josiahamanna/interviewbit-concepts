/*
Given an array of numbers A , in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Note: Output array must be sorted.
*/

const getFirstSetBit = (n) => {
  let i = 0;

  while (1 << i <= n) {
    if (n & (1 << i)) break;
    i++;
  }

  return i;
};

const solve = (A) => {
  let num1 = 0,
    num2 = 0;
  let xorOfAll = A.reduce((acc, item) => acc ^ item, 0);

  console.log(xorOfAll, xorOfAll, xorOfAll.toString(2));

  let firstSetBit = getFirstSetBit(xorOfAll);

  console.log("firstSetBit", firstSetBit);

  for (let i = 0; i < A.length; i++) {
    if (A[i] & (1 << firstSetBit)) {
      console.log(true, A[i], A[i].toString(2));
      num1 ^= A[i];
    } else {
      console.log(false, A[i], A[i].toString(2));
      num2 ^= A[i];
    }
  }

  return [num1, num2];
};

const A = [
  2308,
  1447,
  1918,
  1391,
  2308,
  216,
  1391,
  410,
  1021,
  537,
  1825,
  1021,
  1729,
  669,
  216,
  1825,
  537,
  1995,
  805,
  410,
  805,
  602,
  1918,
  1447,
  90,
  1995,
  90,
  1540,
  1161,
  1540,
  2160,
  1235,
  1161,
  602,
  880,
  2160,
  1235,
  669,
];

console.log(solve(A));
