const solve = (A) => {

 let result = [];
    for (let i = 0; i < A.length; i++) {
    let j = 0,
      k = i,
      count = 0;
    while (A[j] === A[k] && j < A.length) {
      count++;
      j++;
      k++;
    }
    result.push(count);
  }

  return result;
};

const A = "xxyzxxyzwxxyzxxyzx";

console.log(solve(A));
