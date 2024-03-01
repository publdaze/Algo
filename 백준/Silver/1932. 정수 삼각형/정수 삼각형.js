const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map(Number));

//REVIEW - 알고리즘 설계 실패

for (let i = input.length - 2; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    input[i][j] += Math.max(input[i + 1][j], input[i + 1][j + 1]);
  }
}

console.log(input[0][0]);

/* 트리로 풀어서 하위 두 노드 중 큰 걸 계속 선택해가는 그리디 형식으로 풀면 될 줄 알았는데 매번의 선택이 최선이라도 결과적으로 최선이 아닌 경우가 있음
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

  setTree(i, j, node) {
    if (i === input.length) return;

    node.value = input[i][j];
    node.left = new Node();
    node.right = new Node();

    this.setTree(i + 1, j, node.left);
    this.setTree(i + 1, j + 1, node.right);
  }

  maxRootSum(node) {
    return node.value + this.maxRootSum(nextNode);
  }
}

const tree = new Tree(new Node(input[0][0]));
tree.setTree(0, 0, tree.root); */
