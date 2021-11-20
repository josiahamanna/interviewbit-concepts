// Tower of hannoi
// Assumption: Print movement of disks from S->D using T
// Main logic: if no disk; return

// Move N-1 disks from source to temp using destination; TOH(N-1, s, d, t)
// Move Nth disk to source to destination; print
// Move N-1 disks from temp to destination using source; TOH(N-1, t, s, d)

const towerOfHannoi = (N, source, temp, destination, result = []) => {
  if (N === 0) {
    return;
  }
  towerOfHannoi(N - 1, source, destination, temp, result);
  console.log(`move disk ${N} from ${source} to ${destination}`);
  result.push([N, source, destination]);
  towerOfHannoi(N - 1, temp, source, destination, result);

  return result;
};

console.log(towerOfHannoi(3, 1, 2, 3));
