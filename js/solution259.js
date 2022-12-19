// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.


function numberToPower(number, power){
    let base = number
    for(let i = 1; i < power; i++){
        number = number*base
    }
    return power > 0 ? number : 1
  }
console.log(numberToPower(4, 2))