/*  methods to insert a new node in the linked list are discussed. A node can be added in three ways 

   1) At the front of the linked list  
   2) After a given node. 
   3)  At the end of the linked list. 
    */

// 1) At the front of the linked list
/* 
         they can first create new node

         
 */

// var head;
// class Node {
//   constructor(val) {
//     this.head = val;
//     this.next = null;
//   }
// }
// // this function add element in front of linklist
// function push(new_data) {
//   var new_node = new Node(new_data);
//    new_node.next = head;
//   head = new_node;
// }
// // this function use tranvesing of link list
// function linklist() {
//   var n = head;
//   while (n != null) {
//     console.log(n.head); //n.head means only head print
//     n = n.next;
//   }
// }

// var head = new Node(1);
// var second = new Node(2);
// var third = new Node(3);
// var forth = new Node(4);

// head.next = second; // Link first node with the second node
// second.next = third; // Link second node with the third node
// third.next = forth;

// push(6);
// linklist();
// ========================================================================

class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}
class linkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // mens to add value in the last of linkList
  push(ele) {
    let newNode = new Node(ele);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //  mens to remove value from last
  pop(){
    if(!this.head){
      return undefined
    }
     let current=this.head
     let newTail=current
     
     while(current.next){
        newTail=current
      current=current.next
     }
       this.tail=newTail
       this.tail.next=null
       this.length--
       if(this.length==0){
        this.head=null
        this.tail=null
       }
      return current
 }
   //removing  first node of the list
  shift(){
    if(!this.head){
      return undefined
    }
    let current=this.head
    this.head=current.next
    this.length--

    if (this.length==0) {
      this.tail=null
    }
    return current
  }
 // to add the node in first postion
  unshift(val){
    let new_node=new Node(val)
     if(!this.head){
      this.head=new_node
      this.tail=this.head
     }else{
      new_node.next=this.head
      this.head=new_node
     }
     this.length++
     return this

  }
  // reterving the node by its postion in the linklist
  get(index){
      if(index <0 || index >=this.length){
        return null
      }
      let counter=0
      let current=this.head
      while(current!=index){
        current=current.next
             counter++;
      }      
      return current
  }

  //changing the value of node based on its postions in the list

}
let list = new linkList();
list.push("hi");
// list.push("GOODBYE")