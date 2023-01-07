def solve(A, B):
    curr_sum = A[0]
    start = 0
    sum_ = B
    n = len(A)

    i = 1

    while i <= n:
        while curr_sum > sum_ and start < i-1:
 
            curr_sum = curr_sum - A[start]
            start += 1

        if curr_sum == sum_:
            return [start, i-1]

        if i < n:
            curr_sum = curr_sum + A[i]
            i += 1

        return -1


arr = [15, 2, 4, 8, 9, 5, 10, 23]
n = len(arr)
sum_ = 23

solve(arr,sum_)

