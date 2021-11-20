// Given N, Calculate sum of digits
// Assumption: calculate and return sum of digits
// Main: logic sumDigits(N/10) + N%10
// Base condition: when is N < 10 return N; or N===0 return 0

const solve = (A) => {
  if (A) {
    return (A % 10) + solve(parseInt(A / 10));
  } else {
    return 0;
  }
};

console.log(solve(555));
