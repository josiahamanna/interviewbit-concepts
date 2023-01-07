/*
Reverse the bits of an 32 bit unsigned integer A.
*/

const solve = (A) => {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    if (A & (1 << i)) ans += Math.pow(2, 32 - i - 1);
  }
  return ans;
};

const A = 3;

console.log(solve(A));
