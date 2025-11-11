function solution(clothes) {
    const map = new Map();
    let count = 0;
    
    for([cloth, type] of clothes){
        if(map.has(type)){
            const n = map.get(type);
            map.set(type, [...n, cloth])
        } else {
            map.set(type, [cloth]);
        }
    }
    
    let answer = 1;
    for (const [_, list] of map) {
        answer *= list.length + 1;
    }
    return answer - 1;
}