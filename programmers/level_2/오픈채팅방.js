// 오픈채팅방
// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    
    const chat_log = []
    const user = new Map();
    const actions = Object.freeze({
        'Enter': '님이 들어왔습니다',
        'Leave': '님이 나갔습니다'
    })
    
    record.forEach((data)=>{
        const log = data.split(" ");
        if(log[0] === 'Enter' || log[0] === 'Change'){
            user.set(log[1],log[2]);
        }
    })
    
    record.map((data)=>{
        const log = data.split(" ");
        if(log[0] === 'Enter' || log[0] === 'Leave'){
           return chat_log.push(`${user.get(log[1])}${actions[log[0]]}.`); 
        }
    })
    
    return chat_log;
}
