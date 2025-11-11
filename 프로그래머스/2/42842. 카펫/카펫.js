function solution(brown, yellow) {
    for(let y = 3; y < Math.floor(brown / 2); y++){
        let yellow_x = Math.floor((brown - (2 * y)) / 2);
        let yellow_y = y - 2;
        console.log(yellow_x, yellow_y)
        if(yellow_x * yellow_y === yellow) return [yellow_x + 2, y];
    }
}

