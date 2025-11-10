function solution(tickets) {
  const result = [];

  function dfs(tks, current, path) {
    if (tks.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < tks.length; i++) {
      const [from, to] = tks[i];
      if (from === current) {
        // ✅ 정확히 i번째 티켓만 제외
        const newTickets = [
          ...tks.slice(0, i),
          ...tks.slice(i + 1),
        ];
        dfs(newTickets, to, [...path, to]);
      }
    }
  }

  dfs(tickets, "ICN", ["ICN"]);

  result.sort((a, b) => a.join("").localeCompare(b.join("")));
  return result[0];
}