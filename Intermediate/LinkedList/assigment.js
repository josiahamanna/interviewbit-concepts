// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert_node(index, element) {
    if (index > -1) {
      const node = new Node(element);
      let curr, prev;

      curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
    }
  }

  delete_node(index) {
    if (index > -1) {
      let curr,
        prev,
        it = 0;

      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
    }
  }

  print_ll() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

const main = async (ll) => {
  const it = readline[Symbol.asyncIterator]();

  const numberOfQueries = await it.next();

  for (let i = 0; i < parseInt(numberOfQueries.value); i++) {
    const { value: type } = await it.next();
    if (type === "i") {
      const { value: index } = await it.next();
      const { value: element } = await it.next();
      ll.insert_node(index - 1, element);
    } else if (type === "p") {
      ll.print_ll();
    } else if (type === "d") {
      const { value: index } = await it.next();
      ll.delete_node(index - 1);
    }
  }
};

const ll = new LinkedList();

main(ll);
