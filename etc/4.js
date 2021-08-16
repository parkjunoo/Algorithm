const input = [
    {
        length: 6, history: ['Mart,50000', 'GasStation,100000', 'coffeeShop,13500', 'coffeeShop,2500', 'GasStation,50000', 'Drugstore,80000']
    }, {
        length: 10, history: ['C,139500', 'E,947300', 'B,299500', 'A,92500', 'A,6000', 'D,937000', 'E,878800', 'A,9900', 'E,5800', 'C,10050']
    }
]

input.forEach((e) => solution(e.length, e.history));

function solution(length, history) {
    const max_price = [];
    const max_position = [];

    const result = [];
    history.forEach((e) => {
        const [position, price] = e.split(",");
        const target = result.findIndex((item) => item.position === position);
        if (target === -1) {
            result.push({ position: position, price: Number(price), count: 1 });
        } else {
            result[target].price = result[target].price + Number(price)
            result[target].count++;
        }
    })

    result.sort((pre, post) => post.price - pre.price);
    result.forEach((curr) => {
        if (result[0].price === curr.price) {
            max_price.push(curr.position);
        }
    })

    result.sort((pre, post) => post.count - pre.count);
    result.forEach((curr) => {
        if (result[0].count === curr.count) {
            max_position.push(curr.position);
        }
    })

    console.log(max_price);
    console.log(max_position);



}
