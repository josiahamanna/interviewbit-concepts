/*
You are given a string A.

An operation on the string is defined as follows:

Remove the first occurrence of the same consecutive characters. eg for a string "abbcd", the first occurrence of same consecutive characters is "bb".

Therefore the string after this operation will be "acd".

Keep performing this operation on the string until there are no more occurrences of the same consecutive characters and return the final string.
*/

const solve = (A) => {
  let s = [];

  for (let i = 0; i < A.length; i++) {
    if (s.length && s[s.length - 1] === A[i]) {
      s.pop();
    } else {
      s.push(A[i]);
    }
  }
  return s.join("");
};

console.log(solve("abccbc"));
console.log(solve("abbcd"));
