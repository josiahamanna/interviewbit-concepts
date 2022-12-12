// Given a sorted array of N elements. find the frequency of element k.

const solve = (A, B) => {
  let l = 0,
    r = A.length - 1,
    firstIndex = -1,
    lastIndex = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (A[mid] === B) {
      firstIndex = mid;
      r = mid - 1;
    } else if (A[mid] > B) {
      r = mid - 1;
    } else if (A[mid] < B) {
      l = mid + 1;
    }
  }

  l = 0;
  r = A.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (A[mid] === B) {
      lastIndex = mid;
      l = mid + 1;
    } else if (A[mid] > B) {
      r = mid - 1;
    } else if (A[mid] < B) {
      l = mid + 1;
    }
  }

  if (firstIndex === -1) {
    return -1;
  } else {
    return lastIndex - firstIndex + 1;
  }
};

console.log(
  solve([-5, -5, -3, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 8, 10, 10, 15, 15], 11)
);
