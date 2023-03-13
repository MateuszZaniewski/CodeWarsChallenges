// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n

// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only

function computerToPhone(numbers){
    let changed = ''
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == '7') changed += '1'
        else if(numbers[i] == '8') changed += '2'
        else if(numbers[i] == '9') changed += '3'
        else if(numbers[i] == '1') changed += '7'
        else if(numbers[i] == '2') changed += '8'
        else if(numbers[i] == '3') changed += '9'
        else changed += numbers[i]
    }
    return changed
  }

console.log(computerToPhone('0789456123'))