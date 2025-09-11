function solution(n) {
    let i = 1;
    
    while(i !== n){
        i++;130
        if(String(i).includes('3')) n++;
        else if(i % 3 === 0) n++;
    }
  
    return n;
}