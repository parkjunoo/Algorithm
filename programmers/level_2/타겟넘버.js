// 타겟넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
    let answer = 0;
    
    findTargetCount(0, 0);
    function findTargetCount(idx,value) {
        if(idx<numbers.length){
            findTargetCount(idx+1,value + numbers[idx]);
            findTargetCount(idx+1,value - numbers[idx]);
            return
        }
        if(value === target){
            answer++
        }
        
    }
    return answer;
}
