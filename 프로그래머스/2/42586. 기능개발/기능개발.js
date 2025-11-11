function solution(progresses, speeds) {
    let days = [];
    const result = [];
    
    for(let i = 0; i < speeds.length; i++){
        days.push(getDays(progresses[i], speeds[i]));
    }
    console.log(days);
    while(days.length > 0){
        const day = days.shift();
        let count = 1;
        
        while(days.length > 0){
            const d = days.shift();
            if(d <= day){
                count += 1;
            } else {
                days.unshift(d);
                break;
            }
        }
        result.push(count);
    }
    return result;
}

function getDays(progress, speed) {
  let day = 0;
  while (progress + day * speed < 100) {
    day++;
  }
  return day;
}