const fs = require("fs");
const inputNumList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
// 지민는 과장
// 진실 아는 사람이 있음 -> 거짓말쟁이 들통
// 어떤 파티에서 진실, 어떤 파티 과장으로 들은 사람 -> 거짓말쟁이
// 거짓말 쟁이 피해야 함
// 지민 모든 파티 참가
// => 거짓말쟁이로 알려지지 않으면서 과장된 이야기 파티 최대값

// 1. 진실이 있는 파티에서는 과장 X -> 진실이 있는 파티 찾아야함
// 2. 진실이 있는 파티의 사람들은 진실만 들어야 함 -> 같은 파티 사람들 있는 파티 찾아야 함 (이미 진실된 파티는 굳이 체크 안 해도 됨) -> Set

const getPeopleByParty = (party) => {
  return Object.fromEntries(party.map(([_, ...people], partyIdx) => [partyIdx + 1, people]));
};

const getPartyByPerson = (party) => {
  return party.reduce((acc, [_, ...people], partyIdx) => {
    for (let person of people) {
      if (!acc[person]) acc[person] = [];
      acc[person].push(partyIdx + 1);
    }
    return acc;
  }, {});
};

const solution = (peopleCnt, partyCnt, party, knownTruthPeople) => {
  if (knownTruthPeople.length === 0) return partyCnt;
  const partyByPerson = getPartyByPerson(party);
  const peopleByParty = getPeopleByParty(party);

  const truthParty = new Set();
  for (let knownTruthPerson of knownTruthPeople) {
    if (!partyByPerson[knownTruthPerson]) continue;
    for (let currParty of partyByPerson[knownTruthPerson]) {
      if (!peopleByParty[currParty]) continue;
      truthParty.add(currParty);
      knownTruthPeople.push(...peopleByParty[currParty]);
      delete peopleByParty[currParty];
    }
    delete partyByPerson[knownTruthPerson];
  }
  return partyCnt - truthParty.size;
};

const [peopleCnt, partyCnt] = inputNumList.shift();
const [_, ...knownTruthPeople] = inputNumList.shift();

console.log(solution(peopleCnt, partyCnt, inputNumList, knownTruthPeople));
