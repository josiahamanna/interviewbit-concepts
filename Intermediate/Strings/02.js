// Given string(only lower chase), sort it.
// This is called as count sort

const solve = (A) => {
  // if the string is containing only lower case, it can contain only 26 distinct characters
  let result = "";
  let count = new Array(26).fill(0);
  for (let i = 0; i < A.length; i++) {
    count[A[i].charCodeAt(0) - 97]++;
  }
  console.log(count);
  for (let i = 0; i < count.length; i++) {
    if (count[i]) {
      for (let j = 0; j < count[i]; j++) {
        result += String.fromCharCode(i + 97);
      }
    }
  }
  // worst case time complexity is 26 + N
  // solve it by creating table
  return result;
};

const A = "dabaedb";
console.log(A);
console.log(solve(A));
