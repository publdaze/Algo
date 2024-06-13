const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const friendsCnt = Number(input.shift());
const relationsCnt = Number(input.shift());

const relations = Array.from({ length: friendsCnt + 1 }, () => []);

input.map((relation) => {
  const [src, dst] = relation.split(" ");
  relations[src].push(dst);
  relations[dst].push(src);
});

const dfs = () => {
  if (relations[1].length === 0) return 0;

  const queue = [[1, 0]];
  const invitation = Array.from({ length: friendsCnt + 1 }, () => false);
  invitation[1] = true;

  while (queue.length > 0) {
    const [src, depth] = queue.pop();

    while (relations[src].length > 0) {
      const friend = relations[src].pop();
      if (invitation[friend] || depth + 1 > 2) continue;
      invitation[friend] = true;
      queue.push([friend, depth + 1]);
    }
  }

  return invitation.filter(Boolean).length - 1;
};

console.log(dfs());
