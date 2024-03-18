//TODO - 키를 최소 몇 번 눌러야 하는 가
//ANCHOR - keymap에서 키 횟수 작은 수로 업데이트

function solution(keymap, targets) {
    const keyCnt = new Map();

    keymap.forEach((key) => {
        [...key].forEach((char, cnt) => {
            if (keyCnt.has(char) && keyCnt.get(char) <= cnt + 1) {
                return;
            }
            keyCnt.set(char, cnt + 1);
        })
    })

    const result = []

    for (let i = 0; i < targets.length; i++) {
        let cnt = 0;
        for (let j = 0; j < targets[i].length; j++) {
            if (keyCnt.get(targets[i][j])) {
                cnt += keyCnt.get(targets[i][j]);
            } else {
                cnt = -1;
                break;
            }
        }
        result.push(cnt);
    }
    
    return result;
}