/*
Given a string B, find if it is possible to re-order the characters of the string B so that it can be represented as a concatenation of A similar strings.

Eg: B = aabb and A = 2, then it is possible to re-arrange the string as "abab" which is a concatenation of 2 similar strings "ab".

If it is possible, return 1, else return -1.
*/

const solve = (A, B) => {
  let hashMap = new Map(),
    result = 1;

  for (let i = 0; i < B.length; i++) {
    if (hashMap.get(B[i])) {
      hashMap.set(B[i], hashMap.get(B[i]) + 1);
    } else {
      hashMap.set(B[i], 1);
    }
  }

  for (let [, value] of hashMap) {
    if (value % A !== 0) {
      result = -1;
      break;
    }
  }

  return result;
};

console.log(solve(1, "bc"));
