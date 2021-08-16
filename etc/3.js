const input = [{
    length: 5,
    times: ['2020-08-01 12:00:00', '2020-08-01 11:50:00', '2020.08.01 11:00:00', '2019-08-10 14:00:00', '2019-08-01 11:00:00', '2020-07-30 12:00:00']
}]

input.forEach((e) => solution(e.length, e.times));

function solution(length, times) {
    const result = [];
    const [date, time] = times[0].split(" ");
    for (let i = 1; i < times.length; i++) {
        const [target_date, target_time] = times[i].split(" ");
        var d = new Date(date);
        var t_d = new Date(target_date);
        const dateDiff = Math.ceil((d.getTime() - t_d.getTime()) / (1000 * 3600 * 24));

        if (target_date.indexOf('.') >= 0) {
            result.push('error');
            continue;
        }

        if (dateDiff) {
            if (dateDiff > 365) {
                const [YYYY, MM, DD] = target_date.split("-");
                result.push(`${YYYY}년 ${MM}월 ${DD}일`);
            } else if (dateDiff >= 30) {
                result.push(`${Math.floor(dateDiff / 30)}개월 전`)
            } else if (dateDiff >= 1) {
                result.push(`${dateDiff}일 전`)
            }
        } else {
            const [HH, mm, ss] = time.split(":");
            const [t_hh, t_mm, t_ss] = target_time.split(":");
            const hourDiff = t_hh - HH;
            const minDiff = t_mm - mm;
            console.log(hourDiff, minDiff)
            if (hourDiff >= 1) {
                result.push(`${hourDiff}시간 전`);
            } else if (minDiff >= 1) {
                result.push(`${minDiff}분 전`);
            } else {
                result.push(`방금 전`);
            }
        }
    }
    console.log(result)

}
