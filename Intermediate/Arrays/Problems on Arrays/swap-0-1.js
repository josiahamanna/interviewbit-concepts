// boundary printing
// inner loop

const solve = (A) => {
  let count = 0;
  let maxCont = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] === "1") {
      count++;
    } else if (A[i] === "0" && i !== 0) {
      if (count) {
        maxCont.push(count);
        count = 0;
      }
    }
  }

  if (count) maxCont.push(count);

  console.table(maxCont);

  let max = 0;

  for (let i = 0; i < maxCont.length - 1; i++) {
    console.log(maxCont[i]);
    let sum = maxCont[i] + maxCont[i + 1] + 1;
    max = Math.max(max, sum);
  }

  console.table(maxCont);

  if (maxCont.length == 1) {
    return maxCont[0];
  } else if (maxCont.length == 2) {
    return Math.max(maxCont[maxCont.length - 1], maxCont[maxCont.length - 2]);
  } else return max;
};

const str = "101";
console.log(str);
console.table(solve(str));
