const print = {
    Enter: (name) => `${name}님이 들어왔습니다.`,
    Leave: (name) => `${name}님이 나갔습니다.`
}

function solution(record) {
    const users = new Map();
    const logs = [];
    
    record.forEach((r) => {
        const [command, uid, name] = r.split(" ");
        
        if (command !== "Leave") {
            users.set(uid, name);
        }
        
        if (command === "Change") return;
        logs.push([command, uid]);
    })
    
    return logs.map(([command, uid]) => print[command](users.get(uid)));
}