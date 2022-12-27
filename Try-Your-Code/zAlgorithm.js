/*
  Create Linked List
*/

let head = null;

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

let node1 = new Node(1);
head = node1;
let node2 = new Node(2);
node1.next = node2;
let node3 = new Node(2);
node2.next = node3;
let node4 = new Node(1);
node3.next = node4;
let node5 = new Node(1);
node4.next = node5;

/*
  Find the kth element (k is 0 based index)
  Ex: find 3rd index
*/

const solve = (A) => {
  console.log(A);
  let st = [],
    count = 0,
    temp = A;

  while (temp != null) {
    count++;
    temp = temp.next;
  }

  temp = A;

  if (count % 2 == 0) {
    for (let i = 0; i < count; i++) {
      if (i < count) {
        st.push(temp.data);
      } else if (st[st.length - 1] === temp.data) {
        st.pop();
      }
      temp = temp.next;
    }
  } else {
    for (let i = 0; i < count; i++) {
      if (i < parseInt(count / 2)) {
        st.push(temp.data);
      } else if (i == parseInt(count / 2)) {
      } else if (st[st.length - 1] == temp.data) {
        console.log(st, temp.data);
        st.pop();
      }
      temp = temp.next;
    }
  }

  console.log(st, count);

  if (st.length) {
    return false;
  } else {
    return true;
  }
};

console.log(solve(head));
