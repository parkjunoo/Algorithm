//https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const kind_Poketmoms = new Set(nums).size;
    if(nums.length/2 >= kind_Poketmoms) {
        return kind_Poketmoms
    }
    return nums.length/2;
}
