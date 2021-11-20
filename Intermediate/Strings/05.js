// Prefix strings: All the substrings starting at index 0
// For example: satsriom
// s, sa, sat, sats, satsr, satsri, satsrio, satsriom

// Given two strings s1 and s2 calculate the longest common prefix string.

const solve = (A, B) => {
  let count = 0,
    i = 0;
  while (i < A.length && i < B.length) {
    if (A[i] === B[i]) {
      count++;
      i++;
    } else {
      break;
    }
  }
  return count;
};

const A = "abacadabra";
const B = "abacus";
console.log(A);
console.log(solve(A, B));
