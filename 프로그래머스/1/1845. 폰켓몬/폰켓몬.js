function solution(nums) {
    let unique = nums.filter((element, index) => {
        return nums.indexOf(element) === index;
    }).length;
    let pick = Math.floor(nums.length / 2)
    return unique > pick ? pick : unique;
}