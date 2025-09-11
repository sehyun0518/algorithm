function solution(wallpaper) {
    let minPointX = 50;
    let minPointY = 50;
    let maxPointX = 0;
    let maxPointY = 0;
    
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                if(minPointY > i) minPointY = i;
                if(minPointX > j) minPointX = j;
                if(maxPointY <= i) maxPointY = i + 1;
                if(maxPointX <= j) maxPointX = j + 1;
            }
        }
        
    }
    
    return [minPointY, minPointX, maxPointY, maxPointX];
}

// start Point (minX, minY) => endPoint (maxX, maxY)