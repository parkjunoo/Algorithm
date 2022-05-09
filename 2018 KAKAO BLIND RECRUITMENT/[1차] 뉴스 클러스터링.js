// [1차] 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
    const result_solt = 65536
    const j_str1 = [];
    const j_str2 = [];
    let union = []; // 합집합
    let intersection = []; // 교집합
    
    for(let i = 0; i < str1.length-1; i++) {
        const target = str1.substr(i,2);
        const isText = /^[a-zA-Z]*$/.test(target);
        if(isText){
            j_str1.push(target.toLowerCase());
        }
    }
    
    for(let j = 0; j < str2.length-1; j++) {
        const target = str2.substr(j,2);
        const isText = /^[a-zA-Z]*$/.test(target);
        if(isText){
            j_str2.push(target.toLowerCase());
        }
    }
    
    if(j_str1.length === 0 && j_str2.length === 0) return result_solt;
    
    let s_str1;
    let l_str2;
    if(j_str1.length > j_str2.length) {
        s_str1 = j_str2.slice();
        l_str2 = j_str1.slice();
    }else {
        s_str1 = j_str1.slice();
        l_str2 = j_str2.slice();
    }
    
    s_str1.forEach((e)=> {
        union.push(e);
        const target = l_str2.findIndex((s) => s === e );
        if(target !== -1) {
            intersection.push(e);
            l_str2.splice(target, 1);
        } 
    }) 
    union = [...union, ...l_str2];
    
    return Math.floor((intersection.length / union.length) * 65536);
}
