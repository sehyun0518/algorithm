function solution(sizes) {
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            sizes[i] = [sizes[i][1], sizes[i][0]]
        }
    }
    let maxWidth = 0;
    let maxHeight = 0;
    for(size of sizes){
        maxWidth = Math.max(maxWidth, size[0]);
        maxHeight = Math.max(maxHeight, size[1]);
    }
    
    return maxWidth * maxHeight;
}

