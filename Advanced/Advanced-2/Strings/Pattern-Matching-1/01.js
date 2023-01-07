/*
Given two binary strings A and B, count how many cyclic permutations of B when taken XOR with A give 0.

NOTE: If there is a string, S0, S1, ... Sn-1 , then it's cyclic permutation is of the form Sk, Sk+1, ... Sn-1, S0, S1, ... Sk-1 where k can be any integer from 0 to N-1.
*/

const solve = (A, B) => {
  let L = 0,
    R = 0,
    result = 0;

  let input = A.split("");
  input = [...input, "#", ...B.split(""), ...B.split("")];
  input.pop();

  let zArray = [input.length];

  for (let i = 1; i < input.length; i++) {
    if (i > R) {
      L = i;
      R = i;
      while (R < input.length && input[R] === input[R - L]) {
        R++;
      }

      zArray[i] = R - L;
      if (R - L === A.length) {
        result++;
      }
      R--;
    } else {
      let j = i - L;
      if (zArray[j] < R - i + 1) {
        zArray[i] = zArray[j];
      } else if (zArray[j] >= R - i + 1) {
        L = i;
        R++;
        while (R < input.length && input[R] === input[R - L]) {
          R++;
        }
        zArray[i] = R - L;
        if (R - L === A.length) {
          result++;
        }
        R--;
      }
    }
  }
  return result;
};

console.log(solve("111", "111"));
