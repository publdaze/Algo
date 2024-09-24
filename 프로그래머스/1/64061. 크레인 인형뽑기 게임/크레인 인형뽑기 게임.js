
function setPositionGroups(board) {
  return board[0].map((_, colIndex) =>
    board
      .map((row) => row[colIndex])
      .filter((cell) => cell !== 0)
      .reverse()
  );
}

function solution(board, moves) {
  const positionGroups = setPositionGroups(board);
  const bucket = [];
  let bombCount = 0;
  for (const move of moves) {
    const index = move - 1;
    const currDoll = positionGroups[index].pop();

    if (!currDoll) {
      continue;
    }

    if (bucket.length > 0 && bucket.at(-1) === currDoll) {
      bucket.pop();
      bombCount += 1;
      continue;
    }

    bucket.push(currDoll);
  }
  return bombCount * 2;
}
