/*
Given two binary strings, return their sum (also a binary string).
*/

const solve = (A, B) => {
  console.log("A", parseInt(A, 2));
  console.log("B", BigInt(parseInt(B, 2)));
  return BigInt(BigInt("0b" + A) + BigInt("0b" + B)).toString(2);
};

const A = "10001100010111000101100010100110001001101010000010011010";
const B =
  "101111000100100100111110010010101110101001100100101001111010011000000110";

console.log(solve(A, B));
