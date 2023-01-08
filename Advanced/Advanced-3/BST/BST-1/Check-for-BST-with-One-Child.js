/*
Initialize an empty stack.
Initialize the current node as root.
Iterate through the preorder traversal array:
If the current node is a leaf node (has no children), pop it from the stack and set the current node to the last element in the stack.
If the current node is an internal node with a left child, add the current node to the stack and set the current node to its left child.
If the current node is an internal node with a right child, return false (since each internal node in a BST with one child must have a left child).
If the stack is empty, return true. Otherwise, return false.

*/

function isValidBSTPreorder(preorder) {
  const stack = [];
  let curr = 0;

  for (let i = 0; i < preorder.length; i++) {
    if (curr.isLeaf()) {
      curr = stack.pop();
    } else if (curr.hasLeftChild()) {
      stack.push(curr);
      curr = curr.left;
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

const preorder = [50, 30, 20, 10, 40, 70, 60, 80];
console.log(isValidBSTPreorder(preorder));
