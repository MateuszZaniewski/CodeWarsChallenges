// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

// Great coding <3



function power(x,y){
    //SHOW ME WHAT YOU GOT!
    let result = 1
    for(let i = 0; i < y; i++){
        result *= x
    }
    return result
  }

console.log(power(2,4))