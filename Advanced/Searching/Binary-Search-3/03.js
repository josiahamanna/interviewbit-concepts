/*
Given an array of integers A of size N and an integer B.

College library has N books,the ith book has A[i] number of pages.

You have to allocate books to B number of students so that maximum number of pages alloted to a student is minimum.

A book will be allocated to exactly one student.
Each student has to be allocated at least one book.
Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
Calculate and return that minimum possible number.
*/

const solve = (A, B) => {
  let r = 0,
    l = Number.MIN_SAFE_INTEGER,
    result = -1;

  for (let i = 0; i < A.length; i++) {
    l = Math.max(l, A[i]);
    r += A[i];
  }

  const check = (mid) => {
    let currentPages = A[0],
      students = 1;

    for (let i = 1; i < A.length; i++) {
      currentPages += A[i];
      if (currentPages <= mid) {
        continue;
      } else {
        students++;
        currentPages = A[i];
      }
    }

    console.log(students);
    if (students > B) return false;
    else return true;
  };

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let con = check(mid);
    console.log("mid", mid, con);
    if (con) {
      result = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return result;
};

console.log(solve([31, 14, 19, 75], 12));
