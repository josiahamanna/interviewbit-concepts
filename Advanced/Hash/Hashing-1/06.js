/*
For Given Number A find if its COLORFUL number or not.

If number A is a COLORFUL number return 1 else return 0.

What is a COLORFUL Number:

A number can be broken into different contiguous sub-subsequence parts. 
Suppose, a number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245. 
And this number is a COLORFUL number, since product of every digit of a contiguous subsequence is different.
*/

const solve = (A) => {
  A = String(A);
  let result = 1,
    hashSet = new Set();

  for (let i = 0; i < A.length; i++) {
    let product = 1;

    for (let j = i; j < A.length; j++) {
      product *= Number(A[j]);
      if (hashSet.has(product)) {
        result = 0;
        break;
      } else {
        hashSet.add(product);
      }
    }
  }

  return result;
};

console.log(solve(263));
