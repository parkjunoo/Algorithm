//https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

const mapping_lsit = ['zero', 'one', 'two', 
                      'three', 'four', 'five', 
                      'six', 'seven', 'eight', 'nine'];

function solution(s) {
    let temp = s;
    for(let i = 0; i < mapping_lsit.length; i++) {
        let exp = new RegExp(`${mapping_lsit[i]}`, 'g');
        temp = temp.replace(exp, i);
    }
    return parseInt(temp);
}
