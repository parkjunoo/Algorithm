// 소수 찾기 
// https://programmers.co.kr/learn/courses/30/lessons/42839

function isPrime(num) {
  for(let i = 2; num > i; i++) {
    if(num % i === 0) return false;
  }
 return num > 1;
}

function checkPrimeNumber (arr, selectNumber) {
    let results = [];
    if (selectNumber === 1) {
        results = arr.map((el) => [el])
    }else {
        arr.forEach((fixed, index, origin) => {
          const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
          const permutations = checkPrimeNumber(rest, selectNumber - 1); 
          const attached = permutations.map((el) => [fixed, ...el]); 
          results.push(...attached); 
        });
    }

    return results; 
}

function solution(numbers) {
    var answer = 0;
    const primeNumbers = new Set();
    const temp = numbers.split("");
    temp.forEach((_, idx)=>{
        const permutations = checkPrimeNumber(temp, idx+1);
        permutations.forEach((e) => {
            const n = Number(e.join(""));
            if(isPrime(n)){
                primeNumbers.add(n);
            }         
        })
    })
    return primeNumbers.size
    
}
