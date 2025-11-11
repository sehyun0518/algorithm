function solution(numbers) {
   let num = allNumbers(numbers.split(""));
    let count = 0;
    for(n of num){
        if(isPrime(n)) count ++;
    }
    return count
}

function allNumbers(digits) {
  const results = new Set();

  function permute(arr, path = []) {
    if (path.length > 0) {
      results.add(Number(path.join("")));
    }
    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      permute(rest, [...path, arr[i]]);
    }
  }

  permute(digits);
  return [...results].sort((a, b) => a - b);
}


function isPrime(num){
    if(num <= 1) return false;
    
    let len = Math.floor(num / 2);
    let c = 2;
    
    while(c <= len){
        if(num % c === 0) return false
        c++
    }
    
    return true;
}