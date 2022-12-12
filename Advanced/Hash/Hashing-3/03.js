/*
Given a string A, find the length of the longest substring without repeating characters.

Note: Users are expected to solve in O(N) time complexity.
*/

const solve = (A) => {

    console.log('input:', A)

    let maxLen = 0, l = 0, r = 0;
    const myHash = {};

    while(r < A.length) {
	if(myHash[A[r]] !== undefined) {
	    l = Math.max(l, myHash[A[r]]+1);
	} 

	maxLen = Math.max(maxLen, r-l+1);
	myHash[A[r]] = r;
	r++;
    };

    return maxLen;
};

console.log(solve('dadbc'));

// set: a:3 b:6 c:5
// max: 3
// l = 7
// r = 7

