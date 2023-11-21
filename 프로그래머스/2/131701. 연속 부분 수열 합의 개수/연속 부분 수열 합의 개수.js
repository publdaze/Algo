function solution(elements) {
    const copyElements = elements.concat(elements.slice(0, -1));
    const sumSet = new Set();
    
    for (let i = 0; i < elements.length; i++) {
        copyElements.slice(i, i + elements.length).reduce((acc, curr) => {
            const sum = acc + curr;
            sumSet.add(sum);
            return acc + curr;
        }, 0);
    }
    
    return sumSet.size;
}