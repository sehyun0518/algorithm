class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    push(current, price) {
        this.heap.push([current, price]);
        this._heapifyUp();
    }

    pop() {
        if (this.isEmpty()) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        
        return min;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        const lastInsertedNode = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentNode = this.heap[parentIndex];

            if (parentNode[1] <= lastInsertedNode[1]) break;

            this.heap[index] = parentNode;
            index = parentIndex;
        }
        this.heap[index] = lastInsertedNode;
    }
    
    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const rootNode = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[1] < rootNode[1]) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && rightChild[1] < rootNode[1]) ||
                    (swapIndex !== null && rightChild[1] < leftChild[1])
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;
            this.heap[index] = this.heap[swapIndex];
            index = swapIndex;
        }
        this.heap[index] = rootNode;
    }
}

function calc(s, distance, map){
    const pq = new PriorityQueue();
    distance[s] = 0;
    pq.push(s, 0);
    
    while(!pq.isEmpty()){
        const [current, cost] = pq.pop();
        if(distance[current] < cost) continue;

        for(const [next, nextCost] of map[current]){
            const totalCost = cost + nextCost;

            if(totalCost < distance[next]){
                distance[next] = totalCost;
                pq.push(next, totalCost);
            }
        }
    }
}

function solution(n, roads, sources, destination) {
    const map = Array.from({ length: n + 1}, () => []);
    
    for(const [a, b] of roads){
        map[a].push([b, 1]);
        map[b].push([a, 1]);
    }
    
    const result = [];
    const distance = Array.from({length: n + 1}, () => Infinity);
    calc(destination, distance, map);
    for(const source of sources){
        result.push(distance[source] === Infinity ? -1 : distance[source])
    }
    return result;
}