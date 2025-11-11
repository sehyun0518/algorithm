function solution(s){
    let stack = [];
    
    for(ss of s){
        if(ss === "(") stack.push("(")
        else {
            const p = stack.pop();
            if(p === undefined) return false;
        }
    }
    if(stack.length === 0) return true;
    return false;
}