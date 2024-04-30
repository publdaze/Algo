// REVIEW

// 이동 - K칸 점프 / (현재까지 온 거리) * 2
// 건전지 사용량 K칸 점프 시 K 만큼 소요
// 도착 위치 N
// 건전지 사용량 최소

// 다른 사람 풀이 - const solution = (n) => n.toString(2).match(/1/g).length;
function solution(n) // O(log n)
{
    let count = 0;

    while (n > 0) {
        count += n % 2;
        n = Math.floor(n / 2);
    }

    return count;
}

// 효율성(런타임 에러 + 시간 초과) - O(n) => 배열 크기(118943106 초과 런타임 에러)
// function solution(n)
// {
//     const battery = [0, 1];
    
//     for (let i = 2; i <= n; i++) {
//         if (i % 2 === 0) battery[i] = battery[i / 2];
//         else battery[i] = battery[Math.floor(i / 2)] + 1;
//     }
    
//     return battery.at(-1);
// }


// 1만큼 이동 후 가능할 때까지 순간이동(X - 1칸보다 많이 이동 후 순간이동이 더 긴거리 순간이동 가능)