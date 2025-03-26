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
// 바이러스 확산
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

const isAirCleaner = (cell) => {
  return cell === -1;
};

const spreadVirus = (maxRow, maxCol, roomInfo) => {
  const spreadRoomInfo = Array.from({ length: maxRow }, () => Array.from({ length: maxCol }, () => 0));
  roomInfo.forEach((row, i) =>
    row.forEach((cell, j) => {
      if (isAirCleaner(cell)) {
        spreadRoomInfo[i][j] = -1;
        return;
      }
      let canMoveCnt = 0;
      for (let [dr, dc] of DIRECTION) {
        const [nr, nc] = [i + dr, j + dc];
        if (outOfRange(nr, nc, maxRow, maxCol) || isAirCleaner(roomInfo[nr][nc])) continue;
        canMoveCnt++;
        spreadRoomInfo[nr][nc] += Math.floor(cell / 5);
      }
      spreadRoomInfo[i][j] += roomInfo[i][j] - canMoveCnt * Math.floor(cell / 5);
    })
  );
  return spreadRoomInfo;
};

const findAirCleaner = (roomInfo) => {
  for (let i = 0; i < roomInfo.length; i++) {
    if (isAirCleaner(roomInfo[i][0]))
      return [
        [i, 0],
        [i + 1, 0],
      ];
  }
};

const airCirculation = (maxRow, maxCol, roomInfo) => {
  const [[upRow, upCol], [downRow, downCol]] = findAirCleaner(roomInfo);

  // 위쪽
  for (let i = upRow - 1; i > 0; i--) {
    roomInfo[i][0] = roomInfo[i - 1][0];
  }

  for (let i = upCol; i < maxCol - 1; i++) {
    roomInfo[0][i] = roomInfo[0][i + 1];
  }

  for (let i = 0; i < upRow; i++) {
    roomInfo[i][maxCol - 1] = roomInfo[i + 1][maxCol - 1];
  }

  for (let i = maxCol - 1; i > upCol + 1; i--) {
    roomInfo[upRow][i] = roomInfo[upRow][i - 1];
  }
  roomInfo[upRow][upCol + 1] = 0;

  // 아래쪽
  for (let i = downRow + 1; i < maxRow - 1; i++) {
    roomInfo[i][downCol] = roomInfo[i + 1][downCol];
  }

  for (let i = 0; i < maxCol - 1; i++) {
    roomInfo[maxRow - 1][i] = roomInfo[maxRow - 1][i + 1];
  }

  for (let i = maxRow - 1; i > downRow; i--) {
    roomInfo[i][maxCol - 1] = roomInfo[i - 1][maxCol - 1];
  }

  for (let i = maxCol - 1; i > upCol + 1; i--) {
    roomInfo[downRow][i] = roomInfo[downRow][i - 1];
  }
  roomInfo[downRow][downCol + 1] = 0;

  return roomInfo;
};

const solution = (maxRow, maxCol, time, roomInfo) => {
  for (let i = 0; i < time; i++) {
    const spreadRoomInfo = spreadVirus(maxRow, maxCol, roomInfo);
    roomInfo = airCirculation(maxRow, maxCol, spreadRoomInfo);
  }

  console.log(roomInfo.flat().reduce((a, c) => a + c, 0) + 2);
};

const [maxRow, maxCol, time] = inputNumList.shift();
solution(maxRow, maxCol, time, inputNumList);
