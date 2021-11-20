const solve = (arr) => {
  arr = arr.sort((a, b) => {
    if (String(a) + String(b) > String(b) + String(b)) return -1;
    else if (String(a) + String(b) < String(b) + String(b)) return 0;
    return 0;
  });

  return arr;
};

const arr = [3, 30, 34, 5, 9];
console.log(arr);

console.table(solve(arr));

console.log("solution", arr.join(""));
