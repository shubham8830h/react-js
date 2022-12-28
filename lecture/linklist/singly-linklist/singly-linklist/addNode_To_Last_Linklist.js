class Node{
  constructor(element){
    this.head=element
    this.next=null
  }
}
 function append(new_data) {
   /*
         * 1. Allocate the Node & 2.
         Put in the data 3. Set next as null
         */
   var new_node = new Node(new_data);

   /*
         * 4. If the Linked List is empty,
         then make the new node as head
         */
   if (head == null) {
     head = new_node
     return;
   }
  /*
         * 4. This new node is going to be the last node,
         so make next of it as null
         */
   new_node.next = null;

   /* 5. Else traverse till the last node */
   var last = head;
   while (last.next != null) last = last.next;
   /* 6. Change the next of last node */
   last.next = new_node;
   return;
 }
function linklist(){
  var n=head
  while(n!=null){
    console.log(n.head)
    n=n.next
  }
}

var head=new Node(1)
var secound=new Node(2)
var third=new Node(3)

head.next=secound
secound.next=third

append(10);
linklist()

