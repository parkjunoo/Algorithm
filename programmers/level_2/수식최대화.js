// 수식 최대화 
// https://programmers.co.kr/learn/courses/30/lessons/67257

const permutations = (arr) => {
        let result = [];
        const temp_arr = [...arr, ...arr.slice(0,-1)];
        for(let i = 0; i < arr.length; i++){
          result.push(temp_arr.slice(i, i+arr.length));
          result.push(temp_arr.slice(i, i+arr.length).reverse());
        }
    return result;
}
    
function solution(expression) {
    
    let max = 0;
    const operator = permutations(['*', '-', '+']);
    const arr = [];
    
    let idx = 0;
    for(let i = 0; i < expression.length; i++){
        if(expression[i] === '*' ||
           expression[i] === '-' ||
           expression[i] === '+'){
            arr.push(Number(expression.slice(idx, i)));
            arr.push(expression[i]);
            idx = i + 1;
        }
        if(i === expression.length-1){
            arr.push(Number(expression.slice(idx, expression.length)));
        }
    }
    
    operator.forEach((opr)=>{
        let temp = arr.slice();
        opr.forEach((e)=>{
            let loop = temp.length;
            while(loop !== 1){
                const idx = temp.findIndex((k)=> k === e )
                if(idx !== -1){
                    if(e === '-'){
                        temp[idx] = temp[idx-1] - temp[idx+1];
                    }else if(e === '+'){
                        temp[idx] = temp[idx-1] + temp[idx+1];
                    }else {
                        temp[idx] =  temp[idx-1] * temp[idx+1];
                    }
                    temp.splice(idx-1, 1);
                    temp.splice(idx, 1)
                }else{
                    break;
                }
                loop = temp.length
            }
        })
        if(max < Math.abs(temp[0])) {
                max = Math.abs(temp[0]);
        }
    })
    return max;
}
