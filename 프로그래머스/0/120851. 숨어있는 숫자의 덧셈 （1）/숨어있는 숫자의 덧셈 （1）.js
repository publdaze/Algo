function solution(my_string) {
    return [...my_string.matchAll(/\d/g)].flat().reduce((acc, curr) => acc + Number(curr), 0);
}