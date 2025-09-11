function solution(board) {
    let n = board.length;
    const map = Array.from({ length: n }, () => Array(n).fill(0));
    let count = 0;
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            
            if(board[i][j] === 1){
                map[i][j] = 1;
                // 하
                if(i + 1 < n) map[i + 1][j] = 1;
                // 상
                if(i - 1 >= 0) map[i - 1][j] = 1;
                
                if(j - 1 >= 0) map[i][j - 1] = 1;
                
                if(j + 1 < n) map[i][j + 1] = 1;
                
                if(i - 1 >= 0 && j - 1 >= 0) map[i - 1][j - 1] = 1;
                
                if(i - 1 >= 0 && j + 1 < n) map[i - 1][j + 1] = 1;
                
                if(i + 1 < n && j - 1 >= 0)map[i + 1][j - 1] = 1;
                
                if(i + 1 < n && j + 1 < n) map[i + 1][j + 1] = 1;
            }
        }
    }
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(map[i][j] === 0){
                count ++;
            }
        }
    }
    
    return count;
}