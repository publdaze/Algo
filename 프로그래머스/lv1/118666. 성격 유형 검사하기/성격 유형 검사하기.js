function solution(survey, choices) {
  var answer = '';
    
  const type = Array.from({ length: 4 }, () => 0);
  survey.map((v, i) => {
    const one = v.search("R");
    const two = v.search("C");
    const three = v.search("J");
    const four = v.search("A");
    
    if (one !== -1) {
      if (one === 0) {
        type[0] -= 4 - choices[i];
      } else {
        type[0] += 4 - choices[i];
      }
    } else if (two != -1) {
      if (two === 0) {
        type[1] -= 4 - choices[i];
      } else {
        type[1] += 4 - choices[i];
      }
    } else if (three != -1) {
      if (three === 0) {
        type[2] -= 4 - choices[i];
      } else {
        type[2] += 4 - choices[i];
      }
    } else {
      if (four === 0) {
        type[3] -= 4 - choices[i];
      } else {
        type[3] += 4 - choices[i];
      }
    }
  });

  type[0] <= 0 ? (answer += "R") : (answer += "T");
  type[1] <= 0 ? (answer += "C") : (answer += "F");
  type[2] <= 0 ? (answer += "J") : (answer += "M");
  type[3] <= 0 ? (answer += "A") : (answer += "N");
    
  return answer;
}