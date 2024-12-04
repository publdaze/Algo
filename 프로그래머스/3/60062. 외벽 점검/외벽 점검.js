function solution(n, weak, dist) {
  const weakLength = weak.length;
  const extendedWeak = [...weak, ...weak.map((x) => x + n)];

  let minFriends = dist.length + 1; // 초기값: 모든 친구를 써도 안 되는 경우

  // 친구 순열을 이용한 완전 탐색
  const permutations = (arr) => {
    if (arr.length === 0) return [[]];
    return arr.flatMap((v, i) =>
      permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((perm) => [
        v,
        ...perm,
      ])
    );
  };

  const distPermutations = permutations(dist);

  // 시작점을 기준으로 탐색
  for (let start = 0; start < weakLength; start++) {
    for (const perm of distPermutations) {
      let count = 1; // 투입한 친구 수
      let position = extendedWeak[start] + perm[count - 1]; // 첫 친구의 커버 범위

      for (let i = start; i < start + weakLength; i++) {
        if (extendedWeak[i] > position) {
          // 새 친구 투입
          count += 1;
          if (count > perm.length) break;
          position = extendedWeak[i] + perm[count - 1];
        }
      }

      minFriends = Math.min(minFriends, count);
    }
  }

  return minFriends > dist.length ? -1 : minFriends;
}