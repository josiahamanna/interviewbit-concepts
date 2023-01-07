/*
Write a recursive function that, given a string S, prints the characters of S in reverse order.
Assuption: Print string in reverse order;
*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const solve = (A) => {
  if (!A) {
    return "";
  }
  return (
    A[A.length - 1] +
    solve(
      A.split("")
        .slice(0, A.length - 1)
        .join("")
    )
  );
};

readline.on("line", (string) => {
  console.log(solve(string));
  readline.close();
});
