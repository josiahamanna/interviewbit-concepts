/*
Given a sorted array, find triplets (i, j, k) arr[i]+arr[j]+arr[k] = sum;
*/

const solve = (A, B) => {
  // let result = [];

  // for (let k = 0; k < A.length; k++) {
  //   let target = B - A[k];
  //   let i = k + 1,
  //     j = A.length - 1;

  //   while (i < j) {
  //     let con = A[i] + A[j];
  //     if (con < target) {
  //       i++;
  //     } else if (con > target) {
  //       j--;
  //     } else {
  //       result.push([A[j], A[k], A[i]]);
  //       i++;
  //       j--;
  //     }
  //   }
  // }

  // return result;
  A.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < A.length; i++) {
    let target = A[i] === 0 ? 0 : -A[i],
      j = i + 1,
      k = A.length - 1;

    while (j < k) {
      let con = A[j] + A[k];
      if (con < target) {
        j++;
      } else if (con > target) {
        k--;
      } else {
        let present = result.filter(
          (item) => item[0] === A[i] && item[1] === A[j] && item[2] === A[k]
        );
        if (!present.length) {
          result.push([A[i], A[j], A[k]]);
        }

        j++;
        k--;
      }
    }
  }
  return result;
};

console.log(
  solve([1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3], 0)
);
