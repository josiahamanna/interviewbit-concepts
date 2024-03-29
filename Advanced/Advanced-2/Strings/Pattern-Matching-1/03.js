/*
Groot has a profound love for palindrome which is why he keeps fooling around with strings.
A palindrome string is one that reads the same backward as well as forward.

Given a string A of size N consisting of lowercase alphabets, he wants to know if it is possible to make the given string a palindrome by changing exactly one of its character.
*/

const solve = (A) => {
  let i = 0,
    j = A.length - 1,
    count = 0;
  while (i < j) {
    if (A[i] !== A[j]) {
      count++;
    }
    i++;
    j--;
  }

  if (i === j && count === 0) {
    return "YES";
  } else if (count === 1) {
    return "YES";
  }

  return "NO";
};

console.log(solve("adaddb"));
