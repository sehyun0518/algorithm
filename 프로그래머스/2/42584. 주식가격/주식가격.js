// [2, 3, 4, 1, 2]

/*
[0]
[0, 1]
[0, 1, 2]
[0, 1, 2] ? (i = 3, 1)
*/


// [1, 2, 3, 2, 3]

/*
[1, 2, 3, 2, 3]
[0]
[0, 1]
[0, 1, 2]
[0(1), 1(2), 2(3)], (i = 3, 2)


*/
function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];
    
    for(let i = 0; i < prices.length; i++){
        while(stack.length !== 0 && prices[stack[stack.length - 1]] > prices[i]){
            let top = stack.pop();

            answer[top] = i - top;
        }
        stack.push(i);
    }

    while(stack.length !== 0){
        let s =  stack.pop();
        answer[s] = prices.length - 1 - s
    }

    return answer;
}
