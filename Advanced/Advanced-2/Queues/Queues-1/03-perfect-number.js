/*
Given an integer A, you have to find the Ath Perfect Number.

A Perfect Number has the following properties:

It comprises only 1 and 2.

The number of digits in a Perfect number is even.

It is a palindrome number.

For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.
*/

const solve = (A) => {
  let ini = "",
    f = -1,
    r = -1,
    queue = [],
    perfectDigits = [1, 2],
    i = 0,
    j = 0,
    result;

  /* while (true) {
    for (let j = 0; j < perfectDigits.length; j++) {
      console.log("for i", i);
      result = ini * 10 + perfectDigits[j];
      queue[++r] = result;
      console.log("result", result);
      i++;

      if (i == A - 1) {
        console.log(i, A, "inside break", i);
        break;
      }
    }
    console.log("ouside before if", i);
    if (i === A - 1) {
      console.log(i, A, "outside break");
      break;
    }
    ini = queue[++f];
  } */

  for (let i = 0; i < A; i++) {
    result = ini + perfectDigits[j];
    queue[++r] = result;
    j = (j + 1) % 2;

    if (j === 0) {
      ini = queue[++f];
    }
  }

  let resultDash = result.split("").reverse().join("");
  result += resultDash;
  console.log("queue", queue);
  return Number(result);
};

console.log(solve(4));
