function solution(s, n) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return [...s].map((c) => c >= "a" && c <= "z" ? lowerCase[(lowerCase.indexOf(c) + n) % lowerCase.length] : c >= "A" && c <= "Z" ? upperCase[(upperCase.indexOf(c) + n) % upperCase.length] : c).join("");
}