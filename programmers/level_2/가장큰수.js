//https://programmers.co.kr/learn/courses/30/lessons/42746#
//가장 큰 수

function solution(numbers) {
    let answer = '';

    numbers.sort((a, b)=>{
        const pre = String(a).padEnd(4, String(a));
        const post = String(b).padEnd(4, String(b));

        for(let i = 0; i < 4; i++){
            if(Number(post[i]) > Number(pre[i])){
                return 1
            }else if(Number(post[i]) < Number(pre[i])){
                return -1
            }
        }

    })
    
    answer = numbers.join("");
    
    if(answer[0] === '0'){
        return '0';
    }
    
    return answer;
}
