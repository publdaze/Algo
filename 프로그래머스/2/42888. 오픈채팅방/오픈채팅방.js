function solution(record) {
  const answer = [];
  const uid = {};

  for (const line in record) {
    const cmd = record[line].split(" ");
    if (cmd[0] != "Leave") {
      uid[cmd[1]] = cmd[2];
    }
  }

  for (const line in record) {
    const cmd = record[line].split(" ");
    if (cmd[0] == "Enter") {
      answer.push(uid[cmd[1]] + "님이 들어왔습니다.");
    } else if (cmd[0] == "Leave") {
      answer.push(uid[cmd[1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}