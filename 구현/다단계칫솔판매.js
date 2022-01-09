// 다단계 칫솔 판매
// https://programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {
    const employee = enroll.reduce((acc, curr, idx)=>{
        return {...acc,[curr]:{revenue:0, referral:referral[idx]}};
    }, {})
    
    for(let i = 0; i < seller.length; i++){
        let proceeds = amount[i] * 100;
        let refer = seller[i];
        do {
            const tenth = Math.floor(proceeds * 0.1)
            employee[refer].revenue += proceeds-tenth;
            refer = employee[refer].referral;
            proceeds = tenth;
            if(!proceeds) break;
        } while(refer !== '-')
    }
    return enroll.map((e, idx) => employee[e].revenue);
}
