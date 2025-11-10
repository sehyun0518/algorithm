function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i <= 8; i++) {
    // ① N을 i번 이어붙인 수 (예: 5, 55, 555, ...)
    const repeatedNum = Number(String(N).repeat(i));
    dp[i].add(repeatedNum);

    // ② 이전 단계 조합
    for (let j = 1; j < i; j++) {
      for (const a of dp[j]) {
        for (const b of dp[i - j]) {
          dp[i].add(a + b);
          dp[i].add(a - b);
          dp[i].add(a * b);
          if (b !== 0) dp[i].add(Math.floor(a / b)); // 나눗셈: 0 방지
        }
      }
    }

    // ③ 목표값 등장 시 반환
    if (dp[i].has(number)) return i;
  }

  return -1;
}