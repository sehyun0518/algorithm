function solution(participant, completion) {
    const m = new Map();
    
    for(p of participant){
        if(m.has(p)){
            const count = m.get(p)
            m.set(p, count + 1);
        }
        else m.set(p, 1);
    }
    
    for(c of completion){
        const count = m.get(c);
        m.set(c, count - 1);
    }
        
    for(n of m){
        if(n[1] === 1) return n[0];
    }
        
}