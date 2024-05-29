function solution(babbling) {
    return babbling.map((b) => b.split(new RegExp(["aya", "ye", "woo", "ma"].join("|")))).reduce((acc, remain) => remain.join("") === "" ? acc + 1 : acc, 0);
}