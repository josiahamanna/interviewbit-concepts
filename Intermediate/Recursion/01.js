//% Sum of N natural numbers
// 1 + 2 + 3 + 4 + 5

// Steps to write recursive code
// Step 1: Assumption:= Decide what you want your function to do!
// Step 2: Main logic:= Sove assuption using sub problems
// Step 3: Basic condition:= When do we want our recursion to stop.

const solve = (A) => {
  if (A == 1) {
    return 1;
  } else {
    return A + solve(A - 1);
  }
};

console.log(solve(4));
