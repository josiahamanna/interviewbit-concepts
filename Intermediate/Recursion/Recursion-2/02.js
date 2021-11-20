// Given a, n, Calculate a^n
// Assumption: Calculate and return a^n
// Main logic: if n is even return solve(a*a, n/2); n is odd return a*sovle(a*a, (n-1)/2)
// Base condition: when is N === 0 return 1

const solve = (a, n, d) => {
  if (n === 0) {
    return 1 % d;
  }
  const ans = solve(a, parseInt(n / 2), d);

  if (n % 2 === 0) {
    let product = ((ans % d) * (ans % d)) % d;
    return product < 0 ? product + d : product;
  } else {
    let product = ((((a % d) * (ans % d)) % d) * (ans % d)) % d;
    return product < 0 ? product + d : product;
  }
  // if (n % 2 === 0) {
  //   return ans * ans < 0 ? ((ans * ans) % d) + d : (ans * ans) % d;
  // } else {
  //   return a * ans * ans < 0 ? ((a * ans * ans) % d) + d : (a * ans * ans) % d;
  // }
};

console.log(solve(0, 0, 3));
