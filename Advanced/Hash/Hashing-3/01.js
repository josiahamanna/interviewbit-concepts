/*

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
