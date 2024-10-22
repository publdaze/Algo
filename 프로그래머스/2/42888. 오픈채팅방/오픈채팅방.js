const logMsg = {
    Enter: (name) => `${name}님이 들어왔습니다.`,
    Leave: (name) => `${name}님이 나갔습니다.`,
}

function solution(record) {
    const members = record.reduce((acc, log) => {
        const [, id, name] = log.split(" ");
        if (name) acc[id] = name;
        return acc;
    }, {});
    
    return record.map((log) => {
        const [command, id] = log.split(" ");
        return logMsg[command]?.(members[id]);
    }).filter(Boolean);
}