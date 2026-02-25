function solution(info, edges) {
    const stack = []; 
    
    const graph = Array.from({ length: info.length }, () => []);
    for (const [start, end] of edges) {
        graph[start].push(end);
    }
    
    stack.push([0, 1, 0, graph[0]]);
    let maxSheep = 0;
    while (stack.length > 0) { 
        const [current, sheep, wolf, paths] = stack.pop();
        
        maxSheep = Math.max(maxSheep, sheep);
        
        for (const next of paths) {
            let nextSheep = sheep;
            let nextWolf = wolf;
            
            if (info[next] === 0) nextSheep += 1;
            else nextWolf += 1;
            
            if (nextWolf >= nextSheep) continue;
            
            const nextPaths = paths.filter(node => node !== next).concat(graph[next]);
            
            stack.push([next, nextSheep, nextWolf, nextPaths]);
        }
    }
    
    return maxSheep;
}