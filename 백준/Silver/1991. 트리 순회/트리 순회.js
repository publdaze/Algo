const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" "));

let result;

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  preorder(currentNodeValue) {
    result += currentNodeValue;
    if (this[currentNodeValue].left) this.preorder(this[currentNodeValue].left);
    if (this[currentNodeValue].right) this.preorder(this[currentNodeValue].right);
  }

  inorder(currentNodeValue) {
    if (this[currentNodeValue].left) this.inorder(this[currentNodeValue].left);
    result += currentNodeValue;
    if (this[currentNodeValue].right) this.inorder(this[currentNodeValue].right);
  }

  postorder(currentNodeValue) {
    if (this[currentNodeValue].left) this.postorder(this[currentNodeValue].left);
    if (this[currentNodeValue].right) this.postorder(this[currentNodeValue].right);
    result += currentNodeValue;
  }
}

const tree = new Tree(new Node("A"));

input.forEach(([value, left, right]) => {
  const node = new Node(value);
  if (left !== ".") node.left = left;
  if (right !== ".") node.right = right;
  tree[value] = node;
});

result = "";
tree.preorder("A");
console.log(result);

result = "";
tree.inorder("A");
console.log(result);

result = "";
tree.postorder("A");
console.log(result);
