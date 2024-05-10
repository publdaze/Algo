function solution(skill, skill_trees) {
    return skill_trees.reduce((acc, curr) => {
        const skillSet = [...curr].filter((s) => skill.includes(s));
        for (let i = 0; i < skillSet.length; i++) {
            if (skillSet[i] !== skill[i]) return acc;
        }
        return acc + 1;
    }, 0);
}