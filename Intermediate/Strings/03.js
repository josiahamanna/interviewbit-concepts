// Given a string, reverse a part of the string.
// Same idea of subarray

const solve = (A, i, j) => {
  A = A.split("");
  console.log(A);
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

  return A.join("");
};

const A = "abdeagf";
console.log(A);
console.log(solve(A, 2, 5));
