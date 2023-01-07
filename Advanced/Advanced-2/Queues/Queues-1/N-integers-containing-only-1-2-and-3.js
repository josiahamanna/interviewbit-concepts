/* 
    Given an integer, A. Find and Return first positive A integers in ascending order containing only 
    digits 1, 2, and 3.

    NOTE: All the A integers will fit in 32-bit integers.  
*/

const solve = (A) => {
  let j = 0,
    queue = [],
    f = -1,
    r = -1,
    digits = ["1", "2", "3"],
    ini = "";

  for (let i = 0; i < A; i++) {
    newNumber = ini + digits[j];
    queue[++r] = newNumber;

    j = (j + 1) % digits.length;

    if (j === 0) {
      ini = queue[++f];
    }
  }

  return queue;
};

console.log(solve(4));
