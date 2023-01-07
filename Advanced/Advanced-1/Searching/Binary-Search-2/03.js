/*
find square root
*/

const solve = (A) => {
  let l = 1,
    r = A,
    result = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid === A) {
      result = mid;
      break;
    } else if (mid * mid > A) {
      r = mid - 1;
    } else {
      result = mid;
      l = mid + 1;
    }
  }

  return result;
};

console.log(solve(100));
