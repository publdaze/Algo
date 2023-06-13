function solution(n,a,b)
{
    let count = 0;
    
    if (a % 2 !== 0) a += 1;
    if (b % 2 !== 0) b += 1;
    
    while (Math.abs(b - a) > 1) {
        a /= 2;
        b /= 2;
        
        if (a % 2 !== 0) a += 1;
        if (b % 2 !== 0) b += 1;
        
        count += 1;
    }

    return count + 1;
}