// Print array in reverse order
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const reverse = (A, n, result) => {
  if (n === 0) {
    return result;
  } else {
    result += A[n - 1];
    return reverse(A, n - 1, result);
  }
};

readline.on("line", (string) => {
  console.log(reverse(string, string.length, ""));
  readline.close();
});
