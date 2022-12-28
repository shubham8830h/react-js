// Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

/*
push() to insert an element into the stack
pop() to remove an element from the stack
top() Returns the top element of the stack.
isEmpty() returns true if stack is empty else false.
size() returns the size of stack.
*/

class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    return this.items.push(element);
  }

  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}

let stack = new Stack();
// push() to insert an element into the stack
stack.add(12);
stack.add(13);
stack.add(456);
stack.add(134);
stack.add(45);
console.log(stack.items);

// pop() to remove an element from the stack
stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.size());

stack.clear();
console.log(stack.items);

console.log(stack.isEmpty());



// stack implmetation on the singly linklist

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
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

var stacklist = new Stack();

stacklist.push(1)

console.log(stacklist)