// 빵 – 야채 – 고기 - 빵

function solution(ingredient) {
    const stack = [0];
    
    let cnt = 0;
    for (const num of ingredient) {
        stack.push(num);
        if (stack.at(-1) === 1 && stack.at(-2) === 3 && stack.at(-3) === 2 && stack.at(-4) === 1) {
            cnt++;
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }
    return cnt;
}

// 시간 초과
// function solution(ingredient) {
//     let str = ingredient.join("");
    
//     const PATTERN = new RegExp("1231");
    
//     let cnt = 0;
//     while(PATTERN.test(str)) {
//         str = str.replace(PATTERN, "");
//         cnt++;
//     }
//     return cnt;
// }