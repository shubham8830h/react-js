var head;
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function deletion(key) {
  let temp = head;
  let prev = null;
  // If head node itself holds the key to be deleted
  while (temp != null && temp.val == key) {
    head = temp.next;
    return;
  }
  // Search for the key to be deleted, keep track of
  // the previous node as we need to change temp.next
  while (temp != null && temp.val != key) {
    prev = temp;
    temp = temp.next;
  }
  // If key was not present in linked list
  if (temp == null) return;
  // Unlink the node from linked list
  prev.next = temp.next;
}
function push(newData) {
  var new_node = new Node(newData);
  new_node.next = head;
  head = new_node;
}
// to print all node
function printNode() {
  var curr = head;
  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
}
push(7);
push(1);
push(3);
push(2);
push(56);
push(23);
push(5);
deletion(23);
printNode();
