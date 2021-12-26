/*
Given a array A of non negative integers, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.
*/

const solve = (A) => {
  if (A.every((item) => item === 0)) {
    return 0;
  }

  let result = "";
  A.sort(
    (a, b) => Number(String(b) + String(a)) - Number(String(a) + String(b))
  );

  for (let i = 0; i < A.length; i++) {
    result += A[i];
  }

  return result;
};

console.log(solve([0, 0]));
