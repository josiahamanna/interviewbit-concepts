/*
Problem Description
Given a string A and a string B, find the window with minimum length in A, which will contain all the characters in B in linear time complexity.
Note that when the count of a character c in B is x, then the count of c in the minimum window in A should be at least x.

Note:

If there is no such window in A that covers all characters in B, return the empty string.
If there are multiple such windows, return the first occurring minimum window ( with minimum start index and length )
*/

const solve = (A, B) => {
    // console.log('A:', A);
    // console.log('B:', B);
    let l = 0, r = 0, total = 0;
    let sizeA = A.length, sizeB = B.length;
    let hashB = {}, min = Number.MAX_SAFE_INTEGER, result = '';

    for(let i = 0; i < sizeB; i++) {
	if(hashB[B[i]]) {
	    hashB[B[i]]++
	} else {
	    hashB[B[i]] = 1;
	}
    }

    // console.log('hash b', hashB)

    while(l < sizeA && r < sizeA) {
	if(hashB[A[r]] !== undefined) {
	    hashB[A[r]]--;
	    if(hashB[A[r]] >= 0) {
		total++;		
	    }
	}

	if(total === sizeB) {
	    while(l <= r - total) {
		if(hashB[A[l]] !== undefined) {
		    if(hashB[A[l]] < 0) {
			hashB[A[l]]++;
			l++;
		    } else {
			break;
		    }
		} else {
		    l++;
		}
	    }
	    if(r - l + 1 < min) {
		min = r - l + 1;
		result = ''
		for(let i = l; i < min+l; i++) {
		    result += A[i]
		}
	    }
	}
	// console.log('min', min)
	r++;
    }

    // console.log(l, r)

    return result;
};

// // console.log(solve('ADOBECODEBANCZ', 'ABC'));
// // console.log(solve('W', 'O'));
// console.log(solve('AAAAAA', 'AA'));

// console.log(solve('z3OyxTp7j3usoz2l0zmr8tJCocoNUvL1cVTWuroYKTluh60TsRvR8jNjiStkt2FNRxPtUn4ZTWSeqgClbFyPWqUHTaSRC5cY5JPVAW25IGusbMaRYmPWUOswP0QnU1BFYldSoDEV59efpkUXI6BQ6vnTAB4', 'm'))
