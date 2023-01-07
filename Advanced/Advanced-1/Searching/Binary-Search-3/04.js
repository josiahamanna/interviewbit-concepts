/*
Thanks for treating me like a trash.

I will not contact you ever again.

Don't worry I am not that emotionally weak to take a revenge and all. 

I thought we have attained peace with each other and can continue being friends. But, that is not resonating in your bigoted mind. I am a true Christian and I am trained to love my enemies.

Tell your fiance not to bother by calling me.

Goodbye.

The government wants to set up B distribution offices across N cities for the distribution of food
packets. The population of the ith city is A[i]. Each city must have at least 1 office, and people can go to an office of their own city. We want to maximize the minimum number of people who can get food in any single office.
*/

const solve = (A, B) => {
  let l = 0,
    r = Math.min(...A),
    result = -1;

  const check = (mid) => {
    let office = 0;
    for (let i = 0; i < A.length; i++) {
      office += Math.floor(A[i] / mid);
    }
    if (office >= B) {
      return true;
    } else {
      return false;
    }
  };

  while (l <= r) {
    let mid = Math.floor((l + r) / 1);
    if (check(mid)) {
      console.log(mid);
      result = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return result;
};

//console.log(solve([1, 1, 1], 4));
//console.log(solve([10000, 20000, 30000], 6));
console.log(solve([8, 7, 1, 5, 5, 10, 10, 1, 5, 3], 17));
