function solution(phone_book) {
    let arr = phone_book.sort();
    for(let i = 0; i < phone_book.length - 1; i++){
        if(arr[i + 1].startsWith(arr[i])) return false;
    }
    return true;
}