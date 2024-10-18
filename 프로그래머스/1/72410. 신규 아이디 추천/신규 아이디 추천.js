// 규칙 맞지 않을 때 => 유사 아이디 추천
// ^[^.]([a-z]|[1-9]|-|_|(\.?))[^.]${3,15}
//

function solution(new_id) {
    const recommend = new_id
        .toLowerCase()
        .replace(/[^a-z\d-_.]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(/^\.|\.$/g, "")
        .replace(/^$/, "a")
        .slice(0, 15).replace(/\.$/g, "");
    
    return recommend.padEnd(3, recommend.at(-1));
}