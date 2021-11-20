// Number of distict elements in every window size.

const solve = (A, k) => {
  // let mySet = new Set();

  // let result = [];
  // let j = k;
  // for (let i = 0; i < k; i++) {
  //   mySet.add(A[i]);
  // }

  // console.log(mySet);

  // result.push(mySet.size);

  // for (let i = 1; i <= A.length - k + 1; i++) {
  //   mySet.delete(A[i - 1]);
  //   mySet.add(A[j]);
  //   console.log(mySet);
  //   result.push(mySet.size);
  //   j++;
  // }

  // return result;
  // Sliding window won't work. Because it removes all the occurrences

  let result = [];

  let myhash = {};

  for (let i = 0; i < k; i++) {
    if (myhash[A[i]]) {
      myhash[A[i]]++;
    } else {
      myhash[A[i]] = 1;
    }
  }

  result.push(Object.keys(myhash).length);
  for (let i = k; i < A.length; i++) {
    myhash[A[i - k]]--;
    if (myhash[A[i - k]] === 0) {
      delete myhash[A[i - k]];
    }
    if (myhash[A[i]]) {
      myhash[A[i]]++;
    } else {
      myhash[A[i]] = 1;
    }
    result.push(Object.keys(myhash).length);
  }

  return result;
};

const A = [2, 4, 3, 8, 3, 9, 4, 9, 4, 10];
console.log(A.length);
console.table(solve(A, 4));
