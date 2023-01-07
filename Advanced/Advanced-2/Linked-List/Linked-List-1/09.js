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
// let node4 = new Node(4)
// node3.next = node4
// let node5 = new Node(5)
// node4.next = node5

const printLinkedList = (head) => {
    let temp = head;

    if(head) {
	while(temp !== null) {
	    console.log(temp.data);
	    temp = temp.next;
	}	
    } else {
	console.log("List empty")
    }
    return;
};

const solve = (B, C) => {

    let temp = head, start = null, end = null, count = 0;

    const reverse = (head) => {
	let nxt = null, prev = null, curr = head;

	while(curr !== null) {
	    nxt = curr.next;
	    curr.next = prev;
	    prev = curr;
	    curr = nxt;
	}

	return prev;
    }

    while(temp !== null) {
	count++;
	if(count === B - 1 && B !== 1) {
	    start = temp;
	    from = temp.next;
	} else if (count === C) {
	    to = temp;
	    end = temp.next
	    to.next = null
	    break;
	}
	temp = temp.next;
    }
    
    if(start) {
	start.next = reverse(from)
	temp = start
    } else {
	head = reverse(head)
    }
	
    while(temp.next !== null) {
	temp = temp.next;
    }
    temp.next = end;

    return head
};

console.log('solve', printLinkedList(solve(1, 2)));
