/*
Divide two integers without using multiplication, division and mod operator.

Return the floor of the result of the division.

Also, consider if there can be overflow cases i.e output is greater than INT_MAX, return INT_MAX.

NOTE: INT_MAX = 2^31 - 1
*/

const solve = (A, B) => {
  if (A == 0) return 0;
  let sign = 1,
    ans = 0,
    safe = Math.pow(2, 31);

  if ((A < 0 && B < 0) || (A > 0 && B > 0)) {
    sign = 0;
  }

  A = Math.abs(A);
  B = Math.abs(B);

  for (let i = 32; i > -1; i--) {
    if (B * Math.pow(2, i) <= A) {
      ans += Math.pow(2, i);
      A -= B * Math.pow(2, i);
    }
  }

  return sign
    ? ans > safe
      ? safe
      : -1 * ans
    : ans > safe - 1
    ? safe - 1
    : ans;
};

const A = -1;
const B = 1;

console.log(solve(A, B));
