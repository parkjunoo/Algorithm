// 기능 개발
// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
    let max = 0;
    let stk = [];
    const result = [];
    for(let i = 0; i < progresses.length; i++ ){
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
		if (!stk.length) max = day;      
		if (max < day) {
			result.push(stk.length);
			stk = []
			max = day;
		}
		stk.push(day);
		if(i === progresses.length - 1)
			result.push(stk.length);
    }
    return result;
}
