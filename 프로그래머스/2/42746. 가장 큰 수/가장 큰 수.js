function solution(numbers) {
  numbers.sort((a, b) => {
    const ab = String(a) + String(b);
    const ba = String(b) + String(a);
    return ba.localeCompare(ab);
  });

  const result = numbers.join("");
  return result[0] === "0" ? "0" : result;
}