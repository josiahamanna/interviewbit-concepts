// Given two integers A and B, find the greatest possible positive M, such that A % M = B % M.

const solve = (A, B) => {
  const min = Math.min(A, B);
  const max = Math.max(A, B);
  let result = 1;

  for (let i = min; i > 1; i--) {
    console.log("min % i", min, i, min % i);
    console.log("max % i", max, i, max % i);
    if (min % i === max % i) {
      result = i;
      break;
    }
  }

  return result;
};

const A = 3;
const B = 13;

console.log(solve(A, B));
