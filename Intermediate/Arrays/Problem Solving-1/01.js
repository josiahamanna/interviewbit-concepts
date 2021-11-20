// Given 2 string, check if they are anagrams of each other.
// 2 strings are anagrams of each other if they are permutation of each other

const solve = (A, B) => {
  return A.split("").sort().join("") === B.split("").sort().join("");
};

const A = "cat";
const B = "act";

console.log(solve(A, B));
