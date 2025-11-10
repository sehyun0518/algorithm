function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 아직 방문하지 않은 노드를 기준으로 BFS 시작
      const queue = [i];
      visited[i] = true;

      while (queue.length > 0) {
        const current = queue.shift();

        for (let j = 0; j < n; j++) {
          if (computers[current][j] === 1 && !visited[j]) {
            visited[j] = true;
            queue.push(j);
          }
        }
      }

      count++; // 하나의 네트워크 완성
    }
  }

  return count;
}