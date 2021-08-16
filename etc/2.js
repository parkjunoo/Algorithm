const input = [{
    length: 3,
    address: ['경기도.수원시.영통구.법조로', '경기도.수원시.영통구.삼성로', '경기도.수원시.영통구.법조로30']
}, {
    length: 4,
    address: ['서울특별시.송파구.충민로', '경기도.성남시.분당구.불정로', '서울특별시.송파구.송민로3', '서울시특별시.송파구']
}, {
    length: 2,
    address: ['경기도.안산시.상룩구.초지1로', '경기도.안산시.상룩구.초지1로20']
}, {
    length: 2,
    address: ['경기도.안양시.만안구', '경기도.안양시.만안구.덕천로']
}]



function solution(length, addressList) {

    let group = [];
    addressList.map((e) => {
        const address = e.split('.');
        for (let i = 0; i < address.length - 1; i++) {
            if (group[i]) {
                group[i].set(address[i], (group[i].get(address[i])) ? (group[i].get(address[i]) + 1) : 1);
            } else {
                group[i] = new Map();
                group[i].set(address[i], 1);
            }
        }
    })

    const result = [];
    group.forEach((g) => {
        for (const [key, value] of g) {
            if (value === length) {
                result.push(key);
            }
        }
    })




    console.log(result.join('.'));
    console.log("-------------");
}
