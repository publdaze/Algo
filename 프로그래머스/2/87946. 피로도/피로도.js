function permutations(arr, n) {
    if (n === 1) return arr.map((v) => [v]);
    let result = [];

    arr.forEach((fixed, idx, arr) => {
      const rest = arr.filter((_, index) => index !== idx);
      const perms = permutations(rest, n - 1);
      const combine = perms.map((v) => [fixed, ...v]);
      result.push(...combine);
    });

    return result;
  }

function solution(k, dungeons) {
    let result = 0;
    for(let dungeonsCase of permutations(dungeons, dungeons.length)) {
        if (result === dungeons.length) return result;
        let have = k;
        let currResult = 0;
        for (let [need, pay] of dungeonsCase) {
            if (have < need) {
                break;
            }
            have -= pay;
            currResult += 1;
        }
        
        result = Math.max(result, currResult);
    }
    
    return result;
}