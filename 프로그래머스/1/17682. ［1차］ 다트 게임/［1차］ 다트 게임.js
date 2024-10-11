// * : 해당점수, 바로 전 점수
// # : 해당점수 -

const SECTION_SCORE = {
    S: (score) => Math.pow(score, 1),
    D: (score) => Math.pow(score, 2),
    T: (score) => Math.pow(score, 3),
}

const OPTION_SCORE = {
    "*": (score, result) => {
        if (result.length > 0) result.push(result.pop() * 2);
        return score * 2;
    },
    "#": (score) => score * -1,
}

function solution(dartResult) {
    const splitedDartResult = dartResult.split(/([S|D|T][#|\*]?)/);
    splitedDartResult.pop();
    const result = [];
    
    while (splitedDartResult.length > 0) {
        const [operand, operator] = splitedDartResult.splice(0, 2);
        const [section, option] = [...operator];
        
        if (option) {
            result.push(OPTION_SCORE[option](SECTION_SCORE[section](operand), result));
        } else {
            result.push(SECTION_SCORE[section](operand));
        }
    }
    
    return result.reduce((acc, curr) => acc + curr, 0);
}