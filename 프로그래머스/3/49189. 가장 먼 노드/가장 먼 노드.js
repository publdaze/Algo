function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => []);

    edge.forEach(([src, dest]) => {
      graph[src].push(dest);
      graph[dest].push(src);
    });

    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    const queue = [1];
    while (queue.length > 0) {
      const src = queue.shift();
      graph[src].forEach((dest) => {
        if (distance[dest] === 0) {
          queue.push(dest);
          distance[dest] = distance[src] + 1;
        }
      });
    }

    const max = Math.max(...distance);
    return distance.filter((item) => item === max).length;
}