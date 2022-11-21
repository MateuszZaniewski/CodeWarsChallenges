// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


function factorial(n){
    let result = 1
    for(let i = 1; i <= n; i++){
        result *= i
    }
    return result
  }

console.log(factorial(5))