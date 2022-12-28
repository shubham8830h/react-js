// Tree is data structue that consists of nodes in a parent/child relationship

// list -linear
// tree nonlinear

// tree as only one root

// root : the top node in tree
// child : a node directly connected to another node when     moving away from the root
// leaf : no children



// properties bineary tree is valid or not check to using properties
// 1) every parent node at most two children
// 2) every node to left is alwayas less than parent
// 3) every node to right is alwayas greater than parent

// ===========================================================
// to create bineary Search Tree 
class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}

class binearySearchTree{
  constructor(){
    this.root=null
  }
}

var tree = new binearySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

