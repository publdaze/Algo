const GROUP_MAX_CNT = 5;

function setGroups(minerals) {
  const groups = [];
  while (minerals.length > 0) {
    const currGroup = minerals.splice(0, GROUP_MAX_CNT);
    groups.push(
      currGroup.reduce(
        (acc, mineral) => {
          acc[mineral] += 1;
          return acc;
        },
        { diamond: 0, iron: 0, stone: 0 }
      )
    );
  }
  return groups;
}

function removeRemainingMinerals(groups, [diamondPick, ironPick, stonePick]) {
  const picksCnt = diamondPick + ironPick + stonePick;
  if (groups.length > picksCnt) groups.splice(-(groups.length - picksCnt));
}

function solution(picks, minerals) {
  const groups = setGroups(minerals);
  removeRemainingMinerals(groups, picks);

  groups.sort((a, b) => b.diamond - a.diamond || b.iron - a.iron || b.stone - a.stone);

  const [diamondPick, ironPick, stonePick] = picks;
  let fatigue = 0;
  fatigue += groups.splice(0, diamondPick).reduce((fatigue, { diamond, iron, stone }) => fatigue + diamond *  1 + iron * 1 + stone * 1, 0);
  fatigue += groups.splice(0,    ironPick).reduce((fatigue, { diamond, iron, stone }) => fatigue + diamond *  5 + iron * 1 + stone * 1, 0);
  fatigue += groups.splice(0,   stonePick).reduce((fatigue, { diamond, iron, stone }) => fatigue + diamond * 25 + iron * 5 + stone * 1, 0);
  return fatigue;
}
