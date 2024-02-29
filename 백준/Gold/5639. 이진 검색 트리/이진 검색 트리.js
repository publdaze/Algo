const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//REVIEW - 참고 - https://m.blog.naver.com/dlaxodud2388/222805763643
//TODO - 전위 순회한 결과 -> 후위 순횐한 결과
//ANCHOR - 전위 순화한 결과로 트리 생성 -> 후위 순회

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(node) {
    this.root = node;
  }

  insert(node, parent) {
    if (!parent) return node;
    if (node.value < parent.value) {
      parent.left = this.insert(node, parent.left);
      return parent;
    }
    if (node.value >= parent.value) {
      parent.right = this.insert(node, parent.right);
      return parent;
    }
  }

  postOrder(currentNode) {
    if (currentNode.left) this.postOrder(currentNode.left);
    if (currentNode.right) this.postOrder(currentNode.right);
    console.log(currentNode.value);
  }
}

const tree = new BST(new Node(input.shift()));

input.forEach((num) => tree.insert(new Node(num), tree.root));
tree.postOrder(tree.root);
