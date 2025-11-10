function solution(m, n, puddles) {
  const MOD = 1_000_000_007;

  // 2차원 배열 생성 (모두 0)
  const arr = Array.from({ length: n }, () => Array(m).fill(0));

  // 웅덩이 표시 (주의: 입력 [x, y] → arr[y-1][x-1])
  for (const [x, y] of puddles) {
    arr[y - 1][x - 1] = -1; // "X" 대신 -1로 표시
  }

  // 시작점
  arr[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === -1) {
        arr[i][j] = 0;
        continue;
      }

      if (i > 0) arr[i][j] += arr[i - 1][j];
      if (j > 0) arr[i][j] += arr[i][j - 1];

      arr[i][j] %= MOD;
    }
  }

  return arr[n - 1][m - 1];
}