// boundary printing
// inner loop

const solve = (s, n) => {
  // To count all 1's in the string
  var cnt_one = 0;

  var max_cnt = 0,
    temp = 0;

  for (var i = 0; i < n; i++) {
    if (s[i] == "1") {
      cnt_one++;
      temp++;
    } else {
      max_cnt = Math.max(temp, max_cnt);
      temp = 0;
    }
  }

  max_cnt = Math.max(max_cnt, temp);

  // To store cumulative 1's
  var left = Array(n);
  var right = Array(n);

  if (s[0] == "1") left[0] = 1;
  else left[0] = 0;

  if (s[n - 1] == "1") right[n - 1] = 1;
  else right[n - 1] = 0;

  // Counting cumulative 1's from left
  for (var i = 1; i < n; i++) {
    if (s[i] == "1") left[i] = left[i - 1] + 1;
    // If 0 then start new cumulative
    // one from that i
    else left[i] = 0;
  }

  for (var i = n - 2; i >= 0; i--) {
    if (s[i] == "1") right[i] = right[i + 1] + 1;
    else right[i] = 0;
  }

  for (var i = 1; i < n - 1; i++) {
    // perform step 3 of the approach
    if (s[i] == "0") {
      // step 3
      var sum = left[i - 1] + right[i + 1];

      if (sum < cnt_one) max_cnt = Math.max(max_cnt, sum + 1);
      else max_cnt = Math.max(max_cnt, sum);
    }
  }

  return max_cnt;
};

const str = "010100110101";

console.table(solve(str, str.length));
