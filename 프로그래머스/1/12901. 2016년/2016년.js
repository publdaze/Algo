const DATES = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const DAY = {
    0: "FRI",
    1: "SAT",
    2: "SUN",
    3: "MON",
    4: "TUE",
    5: "WED",
    6: "THU",
}

function solution(a, b) {
    return DAY[(DATES.slice(0, a).reduce((acc, curr) => acc + curr) + b - 1) % 7];
}