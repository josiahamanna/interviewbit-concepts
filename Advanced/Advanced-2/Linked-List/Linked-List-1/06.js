/*
Given a singly linked list, delete middle of the linked list.

For example, if given linked list is 1->2->3->4->5 then linked list should be modified to 1->2->4->5

If there are even nodes, then there would be two middle nodes, we need to delete the second middle element.

For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.

Return the head of the linked list after removing the middle node.

If the input linked list has 1 node, then this node should be deleted and a null node should be returned.
*/

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

const printLinkedList = () => {
    let temp = head;

    while(temp !== null) {
	console.log(temp.data);
	temp = temp.next;
    }

    return;
};

const solve = () => {
    let temp = head, len = 0;

    while(temp !== null) {
	len++;
	temp = temp.next;
    }

    let i = Math.floor(len/2);
    temp = head;

    while(i > 1) {
	i--;
	temp = temp.next;
    }

    temp.next = temp.next.next

    return temp
};

console.log('solve', solve());

console.log(printLinkedList())
