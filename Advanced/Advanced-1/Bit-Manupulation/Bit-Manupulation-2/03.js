/*
Given two integers A and B, find a number X such that A xor X is minimum possible, and the number of set bits in X equals B.
*/

const solve = (A, B) => {
  let i = 0,
    ans = 0,
    bitCount = 0;

  for (let i = 0; i <= 31; i++) {
    if (A & (1 << i)) bitCount++;
  }

  console.log("bitCount", bitCount, "a", A.toString(2));

  if (bitCount === B) {
    return A;
  } else if (bitCount > B) {
    // calculate required and unset A's bit postion from last
    let lastBitPos;
    for (let i = 0; i <= 31; i++) {
      if (A & (1 << i)) lastBitPos = i;
    }
    while (B) {
      if (A & (1 << lastBitPos)) {
        ans += Math.pow(2, lastBitPos);
        B--;
      }
      lastBitPos--;
    }
  } else {
    // calculate required and add that number to A
    ans = A;
    let required = B - bitCount;
    while (required) {
      if (!(A & (1 << i))) {
        ans += Math.pow(2, i);
        required--;
      }
      i++;
    }
  }

  return ans;
};

const A = 11;
const B = 1;

console.log(solve(A, B));
