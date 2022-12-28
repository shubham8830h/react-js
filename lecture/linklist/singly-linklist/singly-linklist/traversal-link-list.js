// linklist can be defined as collection of object called as nodes that randomly stored in the memory
//  node contains two filds  i.e data stored at that particular address and the pointer which contains the address of the next node in the memory
// the last node of the list contains pointer to null

// ============================================================================
// how to create class
// Traversal of a Linked List

var head; // head of list

/* Linked list Node.  This inner class is made  so that
       main() can access it */
class Node {
  constructor(val) {
    this.head = val;
    this.next = null;
  }
}

/* This function prints contents of linked list starting from head */
function printList() {
  var n = head;
  while (n != null) {
    console.log(n.head + " ");
    n = n.next;
  }
}

/* method to create a simple linked list with 3 nodes*/

/* Start with the empty list. */
var head = new Node(1);
var second = new Node(2);
var third = new Node(3);
var forth =new Node(4)

head.next = second; // Link first node with the second node
second.next = third; // Link second node with the third node
third.next = forth

printList();
