// 거리두기 확인하기
// https://programmers.co.kr/learn/courses/30/lessons/81302

const BFS = (start, map) => {
    let result = 1;
    const visit = Array(5).fill(0).map(()=>Array(5));
    const Queue = [];
    const dir_x = [0, -1, 1, 0];
    const dir_y = [1 ,0, 0, -1];
    
    Queue.push(start);
    visit[start.x][start.y] = 1;
    
    while(Queue.length){
        const temp = Queue.shift();
        let x = temp.x;
        let y = temp.y;
        for(let i = 0; i < 4; i++){
            let temp_x = x + dir_x[i];
            let temp_y = y + dir_y[i];
            if(temp_x >= 0 && temp_x < 5 &&
               temp_y >= 0 && temp_y < 5 &&
               !visit[temp_x][temp_y] && map[temp_x][temp_y] !== 'X') {
                
                visit[temp_x][temp_y] = visit[x][y] + 1;
                Queue.push({x:temp_x,y:temp_y})
                
                if(map[temp_x][temp_y] === 'P'){
                    if((visit[temp_x][temp_y]-1) <= 2){
                        result = 0;
                    }
                }
            }
        } 
    }
    return result;
}


function solution(places) {
    
    var answer = [];

    
    let result = 1;
    answer = places.map((map)=>{
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(map[i][j] === 'P'){
                    if(!BFS({x:i,y:j}, map)) return 0;
                }
            }
        } 
        return 1;
    })
    return answer;
}
