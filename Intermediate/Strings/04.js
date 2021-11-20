// Given a string, reverse word by word
// No spaces at the start and the back.

const reverseString = (A, i, j) => {
  while (i < j) {
    let a = A[i].charCodeAt(0);
    let b = A[j].charCodeAt(0);

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    A[i] = String.fromCharCode(a);
    A[j] = String.fromCharCode(b);
    i++;
    j--;
  }
  return A;
};

const solve = (A) => {
  A = A.split("");
  let i = 0;
  let j = A.length - 1;
  A = reverseString(A, i, j);
  let p1 = 0;
  let p2 = 0;
  while (p2 < A.length) {
    while (p2 < A.length && A[p2] !== " ") {
      p2++;
    }
    A = reverseString(A, p1, p2 - 1);
    p1 = p2 + 1;
    p2 = p2 + 1;
  }
  return A.join("");
};

const A = "love hate data structures";
console.log(A);
console.log(solve(A));
