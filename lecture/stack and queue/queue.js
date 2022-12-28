// queue is data structure its a FIFO (first in first out)
// ex: to play game to how much time to waiting first they can add
// ex: background task ,uploading resources, prinnting/task processing 

// to a quieue is implemation to using array
class queue{
  constructor(){
    this.item=[]
  }
 
  // add element in the queue
  enqueue(element){
      return this.item.push(element)
  }

  //remove element in queue
  dequeue(){
    if(this.item.length >0)
    return this.item.shift()
  }
}

// to queue implemation on the useing singly linklist

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}