// 괄호 변환
// https://programmers.co.kr/learn/courses/30/lessons/60058
 
function solution(p) {
    if(!p.length){
        return '';
    }
    
    p = p.split('');
    let valance = 0;
    let u = '';
    let v = '';
    
    for(let i = 0; i < p.length; i++){
        p[i] === '(' ? valance++ : valance --;
        if(!valance){
            u = p.slice(0, i+1).join('');
            v = p.slice(i+1).join('');
            break;
        }
    }
    
    if(u[0] === '(' && u[u.length - 1] === ')') {
        return u + solution(v); 
    }
    
    return '(' + solution(v) + ')' + u.substring(1, u.length-1).split('').map((e) => {
        return e === '(' ? ')' : '(';
    }).join('')
}
