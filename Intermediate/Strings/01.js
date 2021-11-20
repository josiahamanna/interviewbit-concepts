// Given string, every character is a small or capital, we have to toggle.

const solve = (A) => {
  let result = "";

  for (let i = 0; i < A.length; i++) {
    // if (A[i].charCodeAt(0) >= 65 && A[i].charCodeAt(0) <= 90) {
    //   result += String.fromCharCode(A[i].charCodeAt(0) + 32);
    // } else {
    //   result += String.fromCharCode(A[i].charCodeAt(0) - 32);
    // }
    // use xor instead
    result += String.fromCharCode(A[i].charCodeAt(0) ^ 32);
  }

  return result;
};

const A = "aBcAFD";
console.log(A);
console.log(solve(A));
