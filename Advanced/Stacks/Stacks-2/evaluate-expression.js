/*
An arithmetic expression is given by a string array A of size N. Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each string may be an integer or an operator.
*/

const solve = (A) => {
  let s = [];

  for (let i = 0; i < A.length; i++) {
    if (isNaN(parseInt(A[i]))) {
      let oparand2 = s.pop();
      let oparand1 = s.pop();

      if (A[i] === "/") {
        s.push(parseInt(oparand1 / oparand2));
      } else if (A[i] === "*") {
        s.push(oparand1 * oparand2);
      } else if (A[i] === "-") {
        s.push(oparand1 - oparand2);
      } else if (A[i] === "+") {
        s.push(oparand1 + oparand2);
      }
    } else {
      s.push(parseInt(A[i]));
    }
  }
  return s.pop();
};

// console.log(solve(["2", "1", "+", "3", "*"]));
console.log(solve(["4", "13", "5", "/", "+"]));
