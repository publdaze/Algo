function solution(n) {
    const ternaryN = n.toString(3);
    const reversedTernaryN = [...ternaryN].reverse().join('');
    
    return Number.parseInt(reversedTernaryN, 3);
}