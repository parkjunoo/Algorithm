const input = [
    {
        length: 7, balance: ['5,000', '50,000', '500,000', '5,000,000', '50,000,000', '500,000,000', '5,000,000,000']
    }, {
        length: 2, balance: ['1234567890', '100200300400500']
    }
]

input.forEach((e) => solution(e.length, e.balance));
//{ console.log(Number(a).toLocaleString('ko-KR')) }
function solution(length, balance) {
    const units = ['원', '만', '억', '조']
    balance.forEach((a) => {

        let result = [];
        let unitsIndex = 0;
        let money = Number(a.replace(/\,/g, ""));
        while (money > 0) {
            if (money % 10000) {
                result.push(`${(money % 10000).toLocaleString()}${units[unitsIndex]}`);
            }
            money = Math.floor(money / 10000);
            unitsIndex++;
        }

        let answer = result.reverse().join('');
        answer = answer[answer.length - 1] === '원' ? answer : answer + " 원"
        console.log(answer)

    })
}
