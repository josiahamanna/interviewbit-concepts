/*
  Create Linked List
*/

let head = null

class Node {
    constructor(x) {
	this.data = x;
	this.next = null
    }
}

let node1 = new Node(1)
head = node1;
let node2 = new Node(2)
node1.next = node2
let node3 = new Node(3)
node2.next = node3
let node4 = new Node(4)
node3.next = node4
let node5 = new Node(5)
node4.next = node5

/*
  Search an element k in the LL
  Ex: find 4
*/

const solve = (A) => {
    let temp = head, result = false;
    while(temp != null) {
	if(temp.data === A) {
	    result = true;
	    break;
	} else {
	    temp = temp.next;
	}
    }
    return result;
};

console.log(solve(6));
