function solution(rsp) {
    const WINCASE = {
        2: 0,
        0: 5,
        5: 2,
    }
    
    return [...rsp].map((num) => WINCASE[num]).join("");
}