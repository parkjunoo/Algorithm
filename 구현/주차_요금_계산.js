// https://programmers.co.kr/learn/courses/30/lessons/92341

function timeToMinute(time) {
    const [hour, min] = time.split(":");
    const target = Number(hour * 60) + Number(min);  
    return target;
}

function calcFee(remain_time, per_min, per_fee) {
    let time_gap = Math.ceil((remain_time) / per_min);
    time_gap = time_gap <= 0 ? 0 : time_gap;
    
    return time_gap * per_fee;
}

function solution(fees, records) {
    var answer = [];
    const parking_lot = {};
    const [ baseTime, baseFee, feePerMin, perfee ] = fees;
    
    records.forEach((e, idx) => {
        const [time, car_number, state] = e.split(" ");
        
        // 차량 init
        if(!parking_lot[car_number]) {
            parking_lot[car_number] = {
                state: state,
                fee: 0,
                in_time: 0,
                remain_time: 0,
            }
        }
        
        if(state === 'IN') {
            parking_lot[car_number].state = 'IN';
            parking_lot[car_number].in_time = timeToMinute(time);
        }else {
            parking_lot[car_number].state = 'OUT';
            parking_lot[car_number].remain_time += timeToMinute(time) - parking_lot[car_number].in_time
            parking_lot[car_number].in_time = 0;
        }
    })
    
    const result = [];
    
    Object.keys(parking_lot).map((car_id) => {
        if(parking_lot[car_id].state === 'IN') {
          const limit_time = timeToMinute("23:59") - parking_lot[car_id].in_time;
          parking_lot[car_id].remain_time += limit_time;
        }
        parking_lot[car_id].fee = baseFee;
        parking_lot[car_id].fee += calcFee(parking_lot[car_id].remain_time - baseTime, feePerMin, perfee);
        
        result.push({id: Number(car_id), fee: parking_lot[car_id].fee});
    })
    
    result.sort((a,b) => a.id - b.id);
    
    
    return result.map((car) => car.fee);
}
