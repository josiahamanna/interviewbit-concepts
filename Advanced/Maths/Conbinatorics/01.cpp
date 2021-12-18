#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
using namespace std;

long long getFactorial(int A, int C, unordered_map<int, int> umap) {
  if(umap[A]) {
    return umap[A];
  }
  long long result = 1;

  for (int i = 2; i <= A; i++) {
    result = (result * i) % C;
    umap[i] = result;
  }

  return result % C;
}

// long long getPower(int A, int B, int C) {
//   if (B == 0) {
//     return 1 % C;
//   }
//   if (B == 1) {
//     return A % C;
//   }

//   long long power = getPower(A, B / 2, C) % C;

//   if ((B & 1) == 0) {
//     return (power * power) % C;
//   } else {
//     return (((power * power) % C) * (A % C)) % C;
//   }
// }

long long getPower(long A, long B, long  C) {
  long long result = 1;

  while(B > 0) {
    if(B & 1) result = (result * A) % C;

    A = (A*A) % C;
    B = B/2;
  }
  return result % C;
}

int solve(int A, int B, int C) {
  unordered_map<int, int> umap;
  
  return (((getFactorial(A, C, umap) * getPower(getFactorial(A - B, C, umap), C - 2, C)) %
           C) *
          (getPower(getFactorial(B, C, umap), C - 2, C))) %
         C;
}

int main() {
  
  cout << solve(939221, 586566, 1000000007) << endl;
  //cout << getPower(2, 13, 1000) << endl;  
  return 0;
}
