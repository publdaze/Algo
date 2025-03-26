const fs = require("fs");
const inputNumList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

// 공기청정기는 항상 1번 열에 설치
// 크기는 두 행을 차지
// 위쪽 공기청정기의 바람은 반시계방향으로 순환
// 아래쪽 공기청정기의 바람은 시계방향으로 순환

// 초마다
// 미세먼지 확산
// 공기청정 가동

// T초가 지난 후 구사과 방에 남아있는 미세먼지의 양

const DIRECTION = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const outOfRange = (row, col, maxRow, maxCol) => {
  return row < 0 || row >= maxRow || col < 0 || col >= maxCol;
};

const isAirCleanerCell = (cell) => {
  return cell === -1;
};

const spreadDust = (maxRow, maxCol, room) => {
  const nextRoom = Array.from({ length: maxRow }, () => Array.from({ length: maxCol }, () => 0));

  // 각 셀마다 4방향으로 확산, 공기청정기는 확산 X
  room.forEach((row, r) =>
    row.forEach((cell, c) => {
      if (isAirCleanerCell(cell)) {
        nextRoom[r][c] = -1;
        return;
      }
      const spreadAmount = Math.floor(cell / 5);
      let spreadCount = 0;
      for (let [dr, dc] of DIRECTION) {
        const [nr, nc] = [r + dr, c + dc];
        if (outOfRange(nr, nc, maxRow, maxCol) || isAirCleanerCell(room[nr][nc])) continue;
        spreadCount++;
        nextRoom[nr][nc] += spreadAmount;
      }
      nextRoom[r][c] += room[r][c] - spreadCount * spreadAmount;
    })
  );
  return nextRoom;
};

const findAirCleanerPositions = (room) => {
  for (let i = 0; i < room.length; i++) {
    // 공기청정기는 항상 첫 번째 열에 위치, 연속된 두 행 차지
    if (isAirCleanerCell(room[i][0]))
      return [
        [i, 0],
        [i + 1, 0],
      ];
  }
};

const circulateAirTop = (room, upRow, maxCol) => {
  // 왼쪽 열: 위쪽 방향으로 이동 (upRow-1 ~ 0)
  for (let r = upRow - 1; r > 0; r--) {
    room[r][0] = room[r - 1][0];
  }
  // 윗쪽 행: 왼쪽에서 오른쪽으로 이동 (0 ~ maxCol-1)
  for (let c = 0; c < maxCol - 1; c++) {
    room[0][c] = room[0][c + 1];
  }
  // 오른쪽 열: 아래쪽 방향으로 이동 (0 ~ upRow)
  for (let r = 0; r < upRow; r++) {
    room[r][maxCol - 1] = room[r + 1][maxCol - 1];
  }
  // 윗쪽 행: 오른쪽에서 왼쪽으로 이동 (maxCol-1 ~ 1)
  for (let c = maxCol - 1; c > 1; c--) {
    room[upRow][c] = room[upRow][c - 1];
  }
  room[upRow][1] = 0;
};

const circulateAirBottom = (room, downRow, maxRow, maxCol) => {
  // 왼쪽 열: 아래쪽 방향으로 이동 (downRow+1 ~ maxRow-1)
  for (let r = downRow + 1; r < maxRow - 1; r++) {
    room[r][0] = room[r + 1][0];
  }
  // 아랫쪽 행: 왼쪽에서 오른쪽으로 이동 (0 ~ maxCol-1)
  for (let c = 0; c < maxCol - 1; c++) {
    room[maxRow - 1][c] = room[maxRow - 1][c + 1];
  }
  // 오른쪽 열: 위쪽 방향으로 이동 (maxRow-1 ~ downRow)
  for (let r = maxRow - 1; r > downRow; r--) {
    room[r][maxCol - 1] = room[r - 1][maxCol - 1];
  }
  // 아랫쪽 행: 오른쪽에서 왼쪽으로 이동 (maxCol-1 ~ 1)
  for (let c = maxCol - 1; c > 1; c--) {
    room[downRow][c] = room[downRow][c - 1];
  }
  room[downRow][1] = 0;
};

const airCirculation = (maxRow, maxCol, room) => {
  const [upper, lower] = findAirCleanerPositions(room);
  const upRow = upper[0];
  const downRow = lower[0];
  circulateAirTop(room, upRow, maxCol);
  circulateAirBottom(room, downRow, maxRow, maxCol);
  return room;
};

const solution = (maxRow, maxCol, time, room) => {
  for (let i = 0; i < time; i++) {
    const spreadRoom = spreadDust(maxRow, maxCol, room);
    room = airCirculation(maxRow, maxCol, spreadRoom);
  }

  // 공기청정기 위치는 -1로 표시되어 있으므로 보정(+2)
  console.log(room.flat().reduce((a, c) => a + c, 0) + 2);
};

const [maxRow, maxCol, time] = inputNumList.shift();
solution(maxRow, maxCol, time, inputNumList);
