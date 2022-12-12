/*
Given a string A of size N consisting only of lowercase alphabets. The only operation allowed is to insert characters in the beginning of the string.

Find and return how many minimum characters are needed to be inserted to make the string a palindrome string.
*/

const solve = (A) => {
  const rev = (A) => {
    let arr = A.split("");
    return arr.reverse().join("");
  };

  let str = A + "$" + rev(A);

  let len = A.length * 2 + 1;
  let zArray = new Array(len);
  zArray[0] = 0;
  let l = 0,
    r = 0;

  for (let i = 1; i < len; i++) {
    if (i > r) {
      l = i;
      r = i;
      while (r < len && str[r] === str[r - 1]) {
        r++;
      }
      zArray[i] = r - l;
      r--;
    } else {
      let j = i - l;
      if (zArray[j] < r - i + 1) {
        zArray[i] = zArray[j];
      } else {
        l = i;
        r++;
        while (r < len && str[r] === str[r - l]) {
          r++;
        }
        zArray[i] = r - l;
        r--;
      }
    }
  }

  let val = 0;
  for (let i = zArray.length - 1; i >= 0; i--) {
    if (i + zArray[i] === len) {
      val = Math.max(val, zArray[i]);
    }
  }
  return A.length - val;
};

console.log(solve("abc"));
