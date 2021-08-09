// 순위 검색
// https://programmers.co.kr/learn/courses/30/lessons/72412

/*
  나중에 다시 풀어볼 것! [ 효율성 x ] 귀찮아서 대강조짐;;
*/

function solution(info, query) {
    var answer = [];
    let regex = ''
    query.forEach((q)=>{
        let count = 0;
        const s = q.split(" ")
        info.forEach((p) => {
            const new_info = p.split(" ");
            new_info[0] = new_info[0].
            replace(new RegExp(`${s[0] === '-' ? '[a-z]+' : s[0]}`,'g'), ''); 
            new_info[1] = new_info[1].
            replace(new RegExp(`${s[2] === '-' ? '[a-z]+' : s[2]}`,'g'), '');
            new_info[2] = new_info[2].
            replace(new RegExp(`${s[4] === '-' ? '[a-z]+' : s[4]}`,'g'), '');
            new_info[3] = new_info[3].
            replace(new RegExp(`${s[6] === '-' ? '[a-z]+' : s[6]}`,'g'), '');
            let target = new_info.join('');
            if(Number(target) >= s[7]){
                count++;
            }
        })
        answer.push(count);
    })
    return answer
}
