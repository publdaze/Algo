function solution(a, b, n) {
    let cnt = 0;
    while (n >= a) {
        cnt += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + n % a;
        
        console.log(n)
    }
    return cnt;
}