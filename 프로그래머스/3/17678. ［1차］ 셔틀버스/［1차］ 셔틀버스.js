function solution(n, t, m, timetable) {
    let MTimetable = timetable.sort().map((time) => {
        const [h, min] = time.split(":");
        return (Number(h) * 60) + Number(min);
    });
    
    let left = 0;
    let right = 1439;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        checkValid(n, t, m, MTimetable, mid) ? left = mid + 1 : right = mid;
    }
    
    const answer = left - 1;
    const h = String(Math.floor(answer / 60)).padStart(2, '0');
    const min = String(answer % 60).padStart(2, '0');
    return `${h}:${min}`;
}
function checkValid(n, t, m, timetable, time) {
    const candidates = timetable.filter(v => v <= time).sort((a, b) => a - b);
    
    let idx = 0;
    let busTime = 540;
    let lastBusRemain = m;
    
    for (let i = 0; i < n; i++) {
        let count = 0;
        while (idx < candidates.length && candidates[idx] <= busTime && count < m) {
            idx++;
            count++;
        }
        if (i === n - 1) lastBusRemain = m - count;
        busTime += t;
    }
    
    const lastBusTime = 540 + (n - 1) * t;
    
    if (lastBusRemain > 0) {
        return time <= lastBusTime;
    } else {
        return time < candidates[idx - 1];
    }
}