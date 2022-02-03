int Solution::solve(vector<int> &A, vector<int> &B) {
  int n = A.size(), ans = 0;
  for(int i = 0; i < n; i++) {
    unordered_map<string, int> counter;
    int dup = 1;

    for(int j = i + 1; j < n; j++) {
      if(A[j] === A[i] && B[i] === B[j]) dup++;
      else {
	int dx = A[j] - A[i], dy = B[j] - B[i], g = __gcd(dx, dy);
	counter[to_string(dx/g) + '_' + to_string(dy/g)]++;
      }
    }
    ans = max(ans, dup);
    for(auto p : counter) {
      ans = max(ans, p.second + dup);
    }
  }

  return ans;
}
