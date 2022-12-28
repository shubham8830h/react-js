// Reverse a LinkedList using recursion , given is headNode

class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null;
        // this.prev = null;
        
    }
}

let headNode = new LinkedListNode(10);
headNode.next = new LinkedListNode(20);
headNode.next.next = new LinkedListNode(30);

console.log(headNode);


const reverseFunc = (headNode) => {
    
    if(headNode == null || headNode.next == null)
        return headNode;
    
    let newHead = reverseFunc(headNode.next);
    headNode.next.next = headNode;
    headNode.next = null;
    
    return newHead;
}

console.log("");

console.log("Reversed LinkedList");
console.log(reverseFunc(headNode));
