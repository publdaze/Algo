const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW - https://hagisilecoding.tistory.com/39
//TODO - 버튼 최소 몇번 눌러야하는지
//NOTE - 채널 무한대, 0에서 -는 유지 / 초기값 100
//ANCHOR - 좌 -> 우 가능한 숫자 버튼 클릭, 불가능 경우 가장 가까운 정상 버튼 찾아서 클릭(이분 탐색 사용하면 될 듯 - O(11)이면 굳이..!), 100과 가까운지도 같이 비교

let [targetChannel, , brokenBtn] = input;
targetChannel = Number(targetChannel);
brokenBtn = brokenBtn?.split(" ") || [];
const baseOffset = Math.abs(targetChannel - 100);

const availableChannels = Array.from(
  { length: targetChannel + baseOffset },
  (v, channel) => ![...String(channel)].some((digit) => brokenBtn.includes(digit))
);
availableChannels[100] = true;

const findMinimumClicks = () => {
  for (let offset = 0; offset < baseOffset; offset++) {
    const lowerChannel = targetChannel - offset;
    const upperChannel = targetChannel + offset;

    if (lowerChannel >= 0 && availableChannels[lowerChannel]) {
      return Math.min(baseOffset, offset + String(lowerChannel).length);
    }
    if (availableChannels[upperChannel]) {
      return Math.min(baseOffset, offset + String(upperChannel).length);
    }
  }

  return baseOffset;
};

console.log(findMinimumClicks());

/* 
let cnt = 0;
for (let digit of targetChannel) {
  for (let i = 0; i < brokenButtons.length; i++) {
    if (digit === brokenButtons[i]) {
      cnt += Math.min();
      break;
    }
    if (digit < brokenButtons[i]) {
      cnt += 1;
    }
  }
}
 */
