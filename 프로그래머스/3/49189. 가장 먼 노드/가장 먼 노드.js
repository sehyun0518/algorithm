class PriorityQueue {
    constructor(){
        this.queue = [];
    }
    
    push(p, cost){
        this.queue.push([p, cost]);
        this.queue.sort((a, b) => a[1] - b[1]);
    }
    
    pop(){
        return this.queue.shift();
    }
    
    isEmpty(){
        return this.queue.length === 0;
    }
}

function solution(n, vertex) {
    const graph = Array.from({ length: n + 1}, () => []);
    
    for(const [a, b] of vertex){
        graph[a].push([b, 1]);
        graph[b].push([a, 1]);
    }
    
    const distance = Array.from({ length: n + 1 }, () => Infinity);
    
    distance[1] = 0;
    
    const pq = new PriorityQueue();
    pq.push(1, 0);
    
    while(!pq.isEmpty()){
        const [current, cost] = pq.pop();
        
        if(cost > distance[current]) continue;
        for(const [next, nextCost] of graph[current]){
            const totalCost = cost + nextCost;
            
            if(totalCost < distance[next]){
                distance[next] = totalCost;
                pq.push(next, totalCost);
            }
        }
    }
    const dir = distance.slice(1).sort((a, b) => b - a);
    let result = 0;
    for(const d of dir){
        if(d === dir[0]) result ++;
    }
    return result;
}