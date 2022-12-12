/*
You are given a string A of lowercase English alphabets. Rearrange the characters of the given string A such that there is no boring substring in A.

A boring substring has the following properties:

Its length is 2.
Both the characters are consecutive, for example - "ab", "cd", "dc", "zy" etc.(If the first character is C then the next character can be either (C+1) or (C-1)).
Return 1 if it is possible to rearrange the letters of A such that there are no boring substrings in A else, return 0.
 */

const solve = (A) => {
  function check(s) {
    for (let i = 0; i + 1 < s.length; ++i) {
      if (Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0)) === 1) {
        return false;
      }
    }
    return true;
  }

  let odd = "",
    even = "";

  for (let i = 0; i < A.length; ++i) {
    if (A[i].charCodeAt(0) % 2 === 0) {
      even += A[i];
    } else {
      odd += A[i];
    }
  }

  odd = odd
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
  even = even
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");

  console.log(odd, even);

  if (check(odd + even)) {
    return odd + even;
  } else if (check(even + odd)) {
    return odd + even;
  } else {
    return 0;
  }
  // let oddChar = "",
  //   evenChar = "",
  //   result = 0;

  // for (let i = 0; i < A.length; i++) {
  //   if ((A[i].charCodeAt(0) - 96) % 2) {
  //     oddChar += A[i];
  //   } else {
  //     evenChar += A[i];
  //   }
  // }

  // console.log(oddChar, evenChar);
  // console.log(
  //   "lowest odd:hieghtest even",
  //   oddChar[0].charCodeAt(0),
  //   evenChar[evenChar.length - 1].charCodeAt(0)
  // );
  // console.log(
  //   "highest odd:lowest even",
  //   evenChar[0].charCodeAt(0),
  //   oddChar[oddChar.length - 1].charCodeAt(0)
  // );

  // if (
  //   evenChar[0].charCodeAt(0) + 1 !==
  //     oddChar[oddChar.length - 1].charCodeAt(0) ||
  //   evenChar[0].charCodeAt(0) - 1 !== oddChar[oddChar.length - 1].charCodeAt(0)
  // ) {
  //   result = 1;
  // } else if (
  //   oddChar[0].charCodeAt(0) + 1 !==
  //     evenChar[evenChar.length - 1].charCodeAt(0) ||
  //   oddChar[0].charCodeAt(0) - 1 !== evenChar[evenChar.length - 1].charCodeAt(0)
  // ) {
  //   result = 1;
  // }

  // return result;
};

console.log(solve("gihhfjjejgh"));
