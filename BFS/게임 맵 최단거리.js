//https://programmers.co.kr/learn/courses/30/lessons/1844

function Bfs (map, visit) {
    const Queue = [];
    const dir_x = [ 0, 1 , 0,-1];
    const dir_y = [ 1, 0, -1, 0];
    
    Queue.push({x:0,y:0});
    visit[0][0] = 1;
    
    while(Queue.length) {
        const top = Queue.shift();
        
        for(let i = 0; i <= 4; i++ ) {
            let temp_x = top.x + dir_x[i];
            let temp_y = top.y + dir_y[i];
            if(temp_x >= 0 && temp_x < map.length 
               && temp_y >= 0 && temp_y < map[0].length 
               && map[temp_x][temp_y] && !visit[temp_x][temp_y]) {
                Queue.push({x: temp_x, y: temp_y});
                visit[temp_x][temp_y] = visit[top.x][top.y] + 1;
            }
        }
    }
    const result = visit[map.length -1][map[0].length-1];
    return result ? result : -1
}


function solution(maps) {
    var answer = 0;
    const visit = new Array(maps.length).fill(0).map(() => new Array(maps[0].length).fill(0))
    return Bfs(maps, visit);

}
