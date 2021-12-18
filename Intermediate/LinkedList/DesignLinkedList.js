class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertData(index, data) {
    index = Number(index);
    if (index >= 0 && index <= this.size) {
      const node = new Node(data);

      if (index === 0) {
        node.next = this.head;
        this.head = node;
        if (this.head) {
        } else {
          this.head = node;
        }
      } else {
        let curr = this.head,
          prev,
          i = 0;
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = node;
        node.next = curr;
      }
      this.size++;
    }
  }

  deleteData(index) {
    index = Number(index);
    if (index < this.size) {
      if (index === 0) {
        let curr = this.head;
        this.head = curr.next;
      } else {
        let curr = this.head,
          prev,
          i = 0;
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }
        if (curr.next) {
          prev.next = curr.next;
        } else {
          prev.next = null;
        }
      }
      this.size--;
    }
  }

  printList() {
    let curr = this.head;
    let linkedList = [];
    while (curr) {
      linkedList.push(curr.data);
      curr = curr.next;
    }
    console.log("printList", linkedList.join(" -> "));
  }
}

let ll = new LinkedList();

const solve = (A) => {
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] === 0) {
      ll.insertData(0, A[i][1]);
    } else if (A[i][0] === 1) {
      ll.insertData(ll.size, A[i][1]);
    } else if (A[i][0] === 2) {
      ll.insertData(A[i][2], A[i][1]);
    } else if (A[i][0] === 3) {
      ll.deleteData(A[i][1]);
    }
  }
  return ll.head;
};
const A = [
  [0, 13, -1],
  [2, 10, 0],
  [2, 7, 0],
  [2, 4, 3],
  [1, 20, -1],
  [0, 4, -1],
  [0, 15, -1],
  [2, 9, 3],
  [3, 5, -1],
  [0, 11, -1],
  [3, 1, -1],
  [1, 20, -1],
  [1, 8, -1],
  [3, 5, -1],
  [1, 14, -1],
  [2, 4, 1],
  [0, 9, -1],
  [0, 13, -1],
  [1, 5, -1],
  [3, 8, -1],
  [2, 5, 0],
  [3, 7, -1],
  [0, 14, -1],
  [1, 19, -1],
  [2, 3, 10],
  [1, 3, -1],
  [1, 18, -1],
  [0, 13, -1],
  [3, 16, -1],
  [3, 0, -1],
  [1, 4, -1],
  [2, 1, 13],
  [0, 5, -1],
  [2, 17, 5],
  [2, 17, 3],
  [2, 7, 21],
  [3, 15, -1],
  [0, 15, -1],
  [1, 19, -1],
  [1, 4, -1],
  [0, 7, -1],
  [1, 4, -1],
  [3, 5, -1],
  [1, 11, -1],
  [2, 15, 24],
  [2, 17, 8],
  [2, 15, 18],
  [3, 2, -1],
  [3, 17, -1],
  [3, 21, -1],
  [0, 15, -1],
  [0, 13, -1],
  [0, 11, -1],
  [3, 7, -1],
  [1, 16, -1],
  [1, 4, -1],
  [1, 7, -1],
  [0, 20, -1],
  [1, 11, -1],
  [2, 1, 6],
  [2, 8, 9],
  [0, 3, -1],
  [3, 25, -1],
  [3, 9, -1]
];
// const A = [
//   [0, 1, -1],
//   [1, 2, -1],
//   [2, 3, 1]
// ];

let curr = solve(A);

let linkedList = [];
while (curr) {
  linkedList.push(curr.data);
  curr = curr.next;
}
console.log("printList", linkedList.join(" -> "));
