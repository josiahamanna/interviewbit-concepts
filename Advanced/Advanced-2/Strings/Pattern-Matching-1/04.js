/*
Given 2 strings A and B of size N and M respectively consisting of lowercase alphabets, find the lexicographically smallest string that can be formed by concatenating non empty prefixes of A and B (in that order).
Note: The answer string has to start with a non empty prefix of string A followed by a non empty prefix of string B.
*/

const solve = (A, B) => {
  let i = 0;

  while (i < A.length && A[i] < B[0]) {
    console.log(A[i]);
    i++;
  }

  if (i === 0) i++;

  return A.slice(0, i) + B[0];
};

console.log(solve("tom", "riddle"));
