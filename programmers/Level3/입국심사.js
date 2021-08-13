// https://programmers.co.kr/learn/courses/30/lessons/43238
// 입국심사

function solution(n, times) {
    let max = n * Math.max.apply(null, times);
    let min = 0;
    let count;
    let middle;
    
    while(min <= max){
        middle = Math.floor((max+min)/2);
        
        count = times.reduce((a,c)=>{
            return a += Math.floor(middle/c);
        },0)
    
        if(n <= count){
            max = middle - 1;
        }else if(n > count){
            min = middle + 1;
        }
    }
    
    return min;
}
