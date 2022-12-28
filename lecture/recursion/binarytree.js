//Binary tree
class BTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

rootNode = new BTNode(1);
rootNode.left = new BTNode(2);
rootNode.right = new BTNode(3);
rootNode.left.left = new BTNode(4);
rootNode.left.right = new BTNode(5);

//Do pre-order traversal of Given binary tree using recursion

const preOrderTraversal = (node) => {
  if (node == null) return;
  console.log(node.value);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
};

preOrderTraversal(rootNode);
