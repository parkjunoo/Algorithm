const input = [
    ["#ffffff", 0],
    ["#ffffff", 50],
    ["#00ff00", 100],
];
input.forEach((e) => solution(e));

function solution([color, alpha]) {
    const mappingHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const hexa = Math.floor(255 * (alpha / 100));
    const target = `#${mappingHex[Math.floor(hexa / 16)]}${mappingHex[(hexa % 16)]}` + color.slice(1,);
    console.log(target)
}
