function solution(genres, plays) {
    const map = new Map();
    const result = [];
    
    for(let i = 0; i < genres.length; i++){
        if(map.has(genres[i])){
            const prev = map.get(genres[i]);
            
            map.set(genres[i], [...prev, {plays: plays[i], idx: i}])
        }
        else map.set(genres[i], [{plays: plays[i], idx: i}]);    
    }
    
    const sortedMapToArray = Array.from(map).sort((a, b) => b[1].reduce((a, b) => a + b.plays, 0) - a[1].reduce((a, b) => a + b.plays, 0));
    
    for(gen of sortedMapToArray){
        const g = gen[1].sort((a, b) => {
            if(a.plays === b.plays){
                return a.idx - b.idx;
            } else {
                return b.plays - a.plays;
            }
        })
        for(let i = 0; i < g.length; i++){
            if(i === 2) break;
            result.push(g[i].idx)
        }
    }
    
    return result;
}