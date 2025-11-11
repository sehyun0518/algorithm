function solution(priorities, location) {
    let queue = priorities.map((value, index) => {
        return {priority: value, idx: index};
    })
    console.log(queue);
    let count = 0;
    while(queue.length > 0){
        const q = queue.shift();
        
        let flag = false;
        for(i of queue){
            if(i.priority > q.priority){
                flag = true;
                break;
            }
        }
        if(flag) queue.push(q);
        else {
            count += 1;
            if(location === q.idx){
                return count;
            }
        }
    }
}

