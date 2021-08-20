// 문자열 압축
// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    var answer = Number.MAX_VALUE;
    let temp;
    let count = 1;
    if(s.length === 1){
        return 1;
    }
    // 탐색 문자열의 갯수
    for(let i = 1; i <= s.length/2; i++){
        temp = '';
        for(let k = 0; k < s.length; k = i + k){
            const word = s.slice(k, k + i);
            const target = s.slice(k+i, k+2*i);
            if(word === target){
                count++;
            }else{
               if(count > 1){
                   temp += String(count) + word;
                   count = 1;
               }else{
                   temp += word;
               }
            }
        }
        
        if(answer >= temp.length){
            answer = temp.length;
        }
    }
    
    return answer;
}
