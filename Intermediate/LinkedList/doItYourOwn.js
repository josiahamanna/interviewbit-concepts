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
    if (index > 0 && index <= this.size + 1) {
      const node = new Node(data);

      if (index === 1) {
        node.next = this.head;
        this.head = node;
        if (this.head) {
        } else {
          this.head = node;
        }
      } else {
        let curr = this.head,
          prev,
          i = 1;
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
    if (index <= this.size) {
      if (index === 1) {
        let curr = this.head;
        this.head = curr.next;
      } else {
        let curr = this.head,
          prev,
          i = 1;
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

const ll = new LinkedList();
//ll.insertData(0, 0);
ll.insertData("1", "1");
ll.insertData("2", "3");
ll.insertData("2", "2");
ll.insertData("1", "4");
console.log("ll", JSON.stringify(ll));
ll.printList();
//ll .deleteData("3");
// console.log("ll", JSON.stringify(ll));
// ll.printList();
// ll.insertData("3", 3);
// console.log("ll", JSON.stringify(ll));
// ll.printList();
// ll.deleteData("2");
// console.log("ll", JSON.stringify(ll));
// ll.printList();
// ll.deleteData("1");
// console.log("ll", JSON.stringify(ll));
// ll.printList();
// ll.insertData("3", "1");
// console.log("ll", JSON.stringify(ll));
// ll.printList();
// ll.deleteData("2");
// console.log("ll", JSON.stringify(ll));
// ll.printList();
// ll.deleteData("1");
// console.log("ll", JSON.stringify(ll));
// ll.printList();
// ll.deleteData("1");
// console.log("ll", JSON.stringify(ll));
// ll.printList();
