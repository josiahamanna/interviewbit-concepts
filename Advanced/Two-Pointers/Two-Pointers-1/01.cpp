#include <iostream>
#include <vector>
using namespace std;

int subArraySum(vector<int> &A, int B) {
  /* Initialize curr_sum as value of
  first element and starting point as 0 */
  int curr_sum = A[0], start = 0, i;
  int n = sizeof(A) / sizeof(A[0]);

  /* Add elements one by one to curr_sum and
  if the curr_sum exceeds the sum,
  then remove starting element */
  for (i = 1; i <= n; i++) {
    // If curr_sum exceeds the sum,
    // then remove the starting elements
    while (curr_sum > B && start < i - 1) {
      curr_sum = curr_sum - A[start];
      start++;
    }

    // If curr_sum becomes equal to sum,
    // then return true
    if (curr_sum == B) {
      start++;
      int** result = new int*[start, i];
      return result;
      break;
    }

    // Add this element to curr_sum
    if (i < n)
      curr_sum = curr_sum + A[i];
  }

  // If we reach here, then no subarray
  return -1;
}

int main()
{
    vector<int> A = { 15, 2, 4, 8, 9, 5, 10, 23 };

    int sum = 23;
    subArraySum(A,sum);
    return 0;
}
