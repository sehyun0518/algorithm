function solution(n, lost, reserve) {
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a, b) => a - b);
    for(r of reserve){
        if(lost.includes(r)){
            lost = lost.filter((value) => value !== r)
            reserve = reserve.filter((value) => value !== r)
        }
    }
    
    for(r of reserve){
        if(lost.includes(r - 1)){
            lost = lost.filter((value) => value !== (r - 1));
        } 
        
        else if(lost.includes(r + 1)){
            lost = lost.filter((value) => value !== (r + 1));
        }
    }
    
    return n - lost.length;
}