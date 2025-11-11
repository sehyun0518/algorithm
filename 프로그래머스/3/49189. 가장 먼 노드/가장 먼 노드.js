function solution(n, edge) {
  const graph = {};

  for (const [a, b] of edge) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  const distance = Array(n + 1).fill(0);
  const visited = Array(n + 1).fill(false);

  const queue = [1];
  visited[1] = true;

  while (queue.length > 0) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        distance[next] = distance[node] + 1;
        queue.push(next);
      }
    }
  }

  const maxDist = Math.max(...distance);
  const count = distance.filter(d => d === maxDist).length;

  return count;
}