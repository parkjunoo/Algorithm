// 프린터 
// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    
    let Queue = [];
    let outQueue = [];
    
    priorities = priorities.map((item, idx)=>{
        return {
            position: idx,
            priority: item
        }
    })
    
    const insertQueue = (item) =>{
        const num = priorities.length
        for(let i = 0; i < num; i++){
               if(item.priority < priorities[i].priority){
                priorities.push(item);
                return
            }
        }
        outQueue.push(item);
    }
    
    while(priorities.length){
        const item = priorities.shift()
        insertQueue(item)
    }

    return outQueue.findIndex((e)=> e.position === location) + 1;
}
