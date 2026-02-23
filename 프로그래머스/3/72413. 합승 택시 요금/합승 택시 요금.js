class PriorityQueue {
    constructor(){
        this.queue = [];
    }
    
    pop() {
        return this.queue.shift();
    }
    
    push(current, price) {
        this.queue.push([current, price]);
        
        this.queue.sort((a, b) => a[1] - b[1]);
    }
    
    isEmpty(){
        return this.queue.length === 0;
    }
}

function calc_distance(start, distance, graph){
    const pq = new PriorityQueue();
    pq.push(start, 0)
    
    while(!pq.isEmpty()){
        const [current, cost] = pq.pop();
        
        if(distance[current] < cost) continue;
        
        for(const [next, nextCost] of graph[current]){
            const totalCost = cost + nextCost;
            
            if(totalCost < distance[next]){
                distance[next] = totalCost;
                pq.push(next, totalCost);
            }
        }
    }
}

function solution(n, s, a, b, fares) {
    const graph = Array.from({length : n + 1}, () => []);
    
    for(const [start, end, cost] of fares){
        graph[start].push([end, cost]);
        graph[end].push([start, cost]);
    }
    
    const start_distance = Array.from({length: n + 1}, () => Infinity);
    const a_distance = Array.from({length: n + 1}, () => Infinity);
    const b_distance = Array.from({length: n + 1}, () => Infinity);
    
    start_distance[s] = 0;
    a_distance[a] = 0;
    b_distance[b] = 0;
    
    calc_distance(s, start_distance, graph);
    calc_distance(a, a_distance, graph);
    calc_distance(b, b_distance, graph);
    
    let minFare = Infinity;
    
    for(let k = 1; k <= n; k++){
        if (start_distance[k] !== Infinity && a_distance[k] !== Infinity && b_distance[k] !== Infinity) {
            const totalCost = start_distance[k] + a_distance[k] + b_distance[k];
            minFare = Math.min(minFare, totalCost);
        }
    }
    
    return minFare;
}