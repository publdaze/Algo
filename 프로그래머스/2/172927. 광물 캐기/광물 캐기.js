const GROUP_MAX_CNT = 5;

function setGroup(minerals) {
  const groups = [];
  while (minerals.length > 0) {
    groups.push(
      minerals.splice(0, GROUP_MAX_CNT).reduce(
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

function solution(picks, minerals) {
  let groups = setGroup(minerals);
  const [diamondPick, ironPick, stonePick] = picks;
  groups = groups.slice(0, diamondPick + ironPick + stonePick);
  groups.sort((a, b) => b.diamond - a.diamond || b.iron - a.iron || b.stone - a.stone);

  let fatigue = 0;

  fatigue += groups.splice(0, diamondPick).reduce((acc, group) => acc + group.diamond + group.iron + group.stone, 0);
  fatigue += groups.splice(0, ironPick).reduce((acc, group) => acc + group.diamond * 5 + group.iron + group.stone, 0);
  fatigue += groups
    .splice(0, stonePick)
    .reduce((acc, group) => acc + group.diamond * 25 + group.iron * 5 + group.stone, 0);

  return fatigue;
}
