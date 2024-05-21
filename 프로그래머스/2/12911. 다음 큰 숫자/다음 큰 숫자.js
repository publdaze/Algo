function solution(n) {
    const binaryOneLength = [...n.toString(2)].filter((ch) => ch === "1").length;
    
    for (let i = n + 1; i <= 1000000; i++) {
      if (binaryOneLength === [...i.toString(2)].filter((ch) => ch === "1").length) {
          return i;
      };
    }
}