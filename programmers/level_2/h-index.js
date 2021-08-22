// https://programmers.co.kr/learn/courses/30/lessons/42747
// h-index

function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=> b-a);
    answer = citations.findIndex((e, idx)=> {
        return e < idx+1;
    })
    return answer === -1 ? citations.length : answer ;
}
