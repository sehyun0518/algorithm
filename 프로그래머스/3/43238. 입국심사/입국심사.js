function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // mid분 동안 각 심사관이 처리할 수 있는 사람 수 합
    const total = times.reduce((acc, t) => acc + Math.floor(mid / t), 0);

    if (total >= n) {
      // 충분히 처리 가능 → 더 줄여보기
      answer = mid;
      right = mid - 1;
    } else {
      // 부족 → 시간 늘려야 함
      left = mid + 1;
    }
  }

  return answer;
}