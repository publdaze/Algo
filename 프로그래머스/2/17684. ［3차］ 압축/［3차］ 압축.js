function solution(msg) {
    const dict = new Map(Array.from({ length: 26 }, (v, i) => [String.fromCharCode(i + 65), i + 1]));
    const result = [];
    
    let currInputIdx = 0;
    msg = [...msg]
    while (currInputIdx < msg.length) {
        let w = msg[currInputIdx++];
        let wc = w + msg[currInputIdx++];
        
        while (dict.has(wc)) {
            w = wc;
            wc = w + msg[currInputIdx++];
        }
        currInputIdx--;
        
        result.push(dict.get(w));
        dict.set(wc, dict.size + 1);
    }
    
    return result;
}