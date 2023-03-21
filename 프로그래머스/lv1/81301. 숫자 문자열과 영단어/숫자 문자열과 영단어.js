// i : 문자 섞인 숫자
// o : 숫자로 다 변환한 것
// 15m

function solution(s) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const wordsD = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
    
    words.forEach((word) => s = s.replaceAll(word, wordsD[word]));
    
    return Number(s);
}