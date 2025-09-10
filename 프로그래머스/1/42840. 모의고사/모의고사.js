function solution(answers) {
    var answer = [0, 0, 0];
    const first = [1,2,3,4,5];
    const second = [2,1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    answers.forEach((value, index) => {
    if (first[index % first.length] === value) answer[0]++;
    if (second[index % second.length] === value) answer[1]++;
    if (third[index % third.length] === value) answer[2]++;
  });
    
    let maxScore = Math.max(...answer);
    return answer.map((score, i) => (score === maxScore ? i + 1 : null)).filter((v) => v !== null);
}