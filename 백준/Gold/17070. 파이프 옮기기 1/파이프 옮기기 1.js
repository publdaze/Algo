const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const N = Number(input.at(0));

const DIRECTION = {
  down: [
    [1, 0, "down"],
    [1, 1, "opposite"],
  ],
  right: [
    [0, 1, "right"],
    [1, 1, "opposite"],
  ],
  opposite: [
    [1, 0, "down"],
    [0, 1, "right"],
    [1, 1, "opposite"],
  ],
};

const outOfRange = (row, col, direction) => {
  return (
    row > N ||
    col >= N ||
    input[row][col] === "1" ||
    (direction === "opposite" && (input[row - 1][col] === "1" || input[row][col - 1] === "1"))
  );
};

const dfs = (row, col, direction) => {
  if (row === N && col === N - 1) return 1;

  let cnt = 0;

  for (let [dRow, dCol, nextDirection] of DIRECTION[direction]) {
    const [nextRow, nextCol] = [row + dRow, col + dCol];
    if (outOfRange(nextRow, nextCol, nextDirection)) continue;
    cnt += dfs(nextRow, nextCol, nextDirection);
  }

  return cnt;
};

const result = dfs(1, 1, "right");
console.log(result);

// const fs = require("fs");
// const input = fs
//   .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" "));

// //빈칸 or 벽
// //파이프 2칸 - 가로, 세로, 대각 방향 (오른쪽, 아래, 오른쪽 아래 대각)
// //대각 물리는 3칸 다 빈 칸 필수
// //(1,1)(1,2) -> (N,N)

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   enqueue(newValue) {
//     const newNode = new Node(newValue);
//     if (this.head === null) {
//       this.head = this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size += 1;
//   }
//   dequeue() {
//     const value = this.head.value;
//     this.head = this.head.next;
//     this.size -= 1;
//     return value;
//   }
//   peek() {
//     return this.head.value;
//   }
// }

// const N = Number(input.shift().at(0));

// const DIRECTION = {
//   down: [
//     [1, 0, "down"],
//     [1, 1, "opposite"],
//   ],
//   right: [
//     [0, 1, "right"],
//     [1, 1, "opposite"],
//   ],
//   opposite: [
//     [1, 0, "down"],
//     [0, 1, "right"],
//     [1, 1, "opposite"],
//   ],
// };

// const outOfRange = (row, col, direction) => {
//   return (
//     row >= N ||
//     col >= N ||
//     input[row][col] === "1" ||
//     (direction === "opposite" && input[row - 1][col] === "1") ||
//     (direction === "opposite" && input[row][col - 1] === "1")
//   );
// };

// const bfs = () => {
//   const queue = new Queue();
//   queue.enqueue({ front: [0, 1], direction: "right" });

//   let cnt = 0;

//   while (queue.size > 0) {
//     const { front, direction } = queue.dequeue();

//     for (let [dRow, dCol, nextDirection] of DIRECTION[direction]) {
//       const [row, col] = front;
//       const [nextRow, nextCol] = [row + dRow, col + dCol];
//       if (outOfRange(nextRow, nextCol, nextDirection)) continue;
//       if (nextRow === N - 1 && nextCol === N - 1) {
//         cnt++;
//         continue;
//       }
//       queue.enqueue({ front: [nextRow, nextCol], direction: nextDirection });
//     }
//   }

//   return cnt;
// };

// console.log(bfs());
