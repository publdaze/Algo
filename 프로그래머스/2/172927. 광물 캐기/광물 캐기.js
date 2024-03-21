//REVIEW

function solution(picks, minerals) {
    const group = [];
    while (minerals.length > 0) {
        const currGroup = minerals.splice(0, 5);
        group.push(
            currGroup.reduce((acc, mineral) => {
                acc[mineral] += 1;
                return acc;
            }, { diamond: 0, iron: 0, stone: 0 })
        );
    }
    
    const picksCnt = picks.reduce((acc, curr) => acc + curr, 0);
    if (group.length > picksCnt) group.splice(-(group.length - picksCnt));
    
    group.sort((a, b) => b.diamond - a.diamond || b.iron - a.iron || b.stone - a.stone);
    
    const [diamondPick, ironPick, stonePick] = picks;
    
    let minFatigue = 0;
    minFatigue += group.splice(0, diamondPick).reduce((fatigue, { diamond, iron, stone }) => fatigue + diamond *  1 + iron * 1 + stone * 1, 0);
    minFatigue += group.splice(0,    ironPick).reduce((fatigue, { diamond, iron, stone }) => fatigue + diamond *  5 + iron * 1 + stone * 1, 0);
    minFatigue += group.splice(0,   stonePick).reduce((fatigue, { diamond, iron, stone }) => fatigue + diamond * 25 + iron * 5 + stone * 1, 0);
    return minFatigue;
}

