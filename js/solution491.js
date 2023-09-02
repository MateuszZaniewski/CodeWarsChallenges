// Definition
// Extra perfect number is the number that first and last bits are set bits.

// Task
// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .



function extraPerfect(n){
  const array = []
  for(let i = 1; i <= n; i++){
    if(i%2 != 0){
      array.push(i)
    }
  }
  return array
}

console.log(extraPerfect(28))