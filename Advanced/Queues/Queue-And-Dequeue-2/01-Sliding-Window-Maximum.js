/*
Given an array of integers A. There is a sliding window of size B, moving from the very left of the array to the very right.
You can only see the B numbers in the window. Each time the sliding window moves rightwards by one position.
You have to find the maximum for each window.

Return an array C, where C[i] is the maximum value in the array from A[i] to A[i+B-1].

Refer to the given example for clarity.

NOTE: If B > length of the array, return 1 element with the max of the array.
*/

const solve = (A, B) => {
    let f = -1, r = -1, dque = [], size=0, result = [];

    for(let i = 0; i < B; i++) {
        while(dque[r] < A[i] && size !== 0) {
            r--;
            size--;
        }
        dque[++r] = A[i];
        size++;
    }

    result.push(dque[f+1]);

    console.log(dque, size, result)

    for(let i = B; i < A.length; i++) {
        while(dque[r] < A[i] && size !== 0) {
            r--;
            size--;
        };
        dque[++r] = A[i];
        size++;

        if(dque[f+1] === A[i-B]) {
            f++;
            size--;
        };

        result.push(dque[f+1])
    };

    return result;

};

// console.log(solve([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(solve([ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ], 2))
