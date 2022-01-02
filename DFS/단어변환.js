// 단어변환
// https://programmers.co.kr/learn/courses/30/lessons/43163

function checkWordDiffOneChar(word, target){
    return word.split("").filter((e, idx)=>{
        if(e !== target[idx]) return true;
            return false;
    }).length === 1
}

function solution(begin, target, words) {
    let min = Number.MAX_VALUE;
    
    function dfs(begin, target, words, visited, times) {
        if(begin === target && min >= times) {
            min = times;
        };
        for(let i = 0; i < words.length; i++){
            if(begin !== words[i] && 
               !visited[i] &&
               checkWordDiffOneChar(begin, words[i]))
            {
                visited[i] = 1;
                dfs(words[i], target, words, visited, times+1);
                visited[i] = 0;
            }
        }
    }
    
    const results = words.filter((e, idx) => {
        const visited = new Array(words.length).fill(0);
        dfs(begin, target, words, visited, 0);
    })
    
    return min === Number.MAX_VALUE ? 0 : min;
}
