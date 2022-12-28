// Add a node after a given node
// Firstly, check if the given previous node is NULL or not.
// Then, allocate a new node and
// Assign the data to the new node
// And then make the next of new node as the next of previous node.
// Finally, move the next of the previous node as a new node.

var head;

class Node {
  constructor(val) {
    this.head = val;
    this.next = null;
  }
}
function insert(prev_node, new_data) {
  if (prev_node == null) {
    return "node cannot be null";
  }
  var new_node = new Node(new_data);
  new_node.next = prev_node.next;
  prev_node.next = new_node;
}

function linklist() {
  var n = head;
  while (n != null) {
    console.log(n.head);
    n = n.next;
  }
}
var head = new Node(1);
var secound = new Node(2);
var third = new Node(3);

head.next = secound;
secound.next = third;
insert(head.next, 6);
linklist();
