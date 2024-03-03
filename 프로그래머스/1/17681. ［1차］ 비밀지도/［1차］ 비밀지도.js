function solution(n, arr1, arr2) {
    arr1 = arr1.map(Number);
    arr2 = arr2.map(Number);
    
    for (let i = 0; i < n; i++) {
        arr1[i] |= arr2[i];
    }
    
    return arr1
        .map((line) => [...line.toString(2).padStart(n, "0")]
             .map((bit) => bit === "1" ? '#' : ' ')
             .join(""));
}