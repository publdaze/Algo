function solution(s) {
    var answer = [];
    let OneCount,
    ZeroCount = 0,
    i = 0;

  while (s !== "1") {
    i += 1;
    OneCount = s.split("1").length - 1;
    ZeroCount += s.length - OneCount;
    s = OneCount.toString(2);
    console.log(ZeroCount, s);
  }

  answer = [i, ZeroCount];
    return answer;
}