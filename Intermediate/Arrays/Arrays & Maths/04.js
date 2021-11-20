// Given string str and p, calculate str%p
// str is a number
// 1 < str.length < 10^5

const power = (a, b, p) => {
  let result = a;

  for (let i = 1; i <= b; i++) {
    result = (result * a) % p;
  }
  return result % p;
};

const solve = (str, p) => {
  let ten = 1;

  let result = 0;
  for (let i = str.length - 1; i > -1; i--) {
    result = result + str[i] * ten;
    result = result % p;
    ten = (ten * 10) % p;
  }

  return result;
};

const str = "1111";
const p = 3;

console.log(solve(str, p));
