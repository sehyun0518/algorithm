function solution(k, dungeons) {
  let result = 0;

  function dfs(k, d, count) {
    result = Math.max(result, count);

    for (let i = 0; i < d.length; i++) {
      const [need, use] = d[i];
      if (k >= need) {
        const next = d.filter((_, idx) => idx !== i);
        dfs(k - use, next, count + 1);
      }
    }
  }

  dfs(k, dungeons, 0);
  return result;
}