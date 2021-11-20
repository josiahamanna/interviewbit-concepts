// Given a column title as appears in an Excel sheet, return its corresponding column number.

const solve = (str) => {
  let result = 0;

  for (let i = str.length - 1; i > -1; i--) {
    result += Math.pow(26, str.length - 1 - i) * (str[i].charCodeAt() - 64);
  }

  return result;
};

const str = "ABCD";

console.log(solve(str));
