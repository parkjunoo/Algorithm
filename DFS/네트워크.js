/*
* 네트워크
* https://programmers.co.kr/learn/courses/30/lessons/43162
*/

function dfs(start, computers, visited){
    visited[start] = 1;
    computers[start].forEach((e, idx) =>{
        if(!visited[idx] && e) 
            dfs(idx, computers, visited);
    })
}

function solution(n, computers) {
    const visited = new Array(computers.length).fill(0);
    return computers.filter((_, idx) => {
        if(visited[idx]) return false;
        dfs(idx, computers, visited)
        return true;
    }).length;
}
