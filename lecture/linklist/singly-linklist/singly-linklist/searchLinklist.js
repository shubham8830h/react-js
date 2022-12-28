
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
var head;
function SearchLinklist(head,ele){
  var curr=head

  while(curr!=null){
    if(curr.val==ele){
      return true
    }
    curr=curr.next
  }
  return false
}

function push(newData) {
  var new_node = new Node(newData);
  new_node.next = head;
  head = new_node;
}

push(1)
push(2)
push(3);
push(4);
console.log(SearchLinklist(head, 2));


// Time Complexity: O(N), Where N is the number of nodes in the LinkedList
// Auxiliary Space: O(1)