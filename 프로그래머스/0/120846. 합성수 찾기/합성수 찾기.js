function solution(n) {
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(find(i)) count++;
    }
    return count;
}

function find(n){
    if(n === 1 || n === 2) return false;
    for(let i = 2; i < n; i++){
        if(n % i === 0) return true;
    }
}