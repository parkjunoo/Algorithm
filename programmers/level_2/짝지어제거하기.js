// https://programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기

/*
  map()을 사용하였을땐 시간 초과가 뜸
*/

function solution(s)
{
    let stack = []
    const target = s.split('');
    
    stack.push(s[0]);
    
    for(let i = 1; i < target.length; i++){
        if(target[i] === stack[stack.length-1]){
            stack.pop();
        }else{
            stack.push(target[i]);
        }
    }

    return stack.length ? 0 : 1;
}
