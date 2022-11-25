// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    let str = ''
    s.split('').forEach((el) => {
        if(el == '0'){
            str += el
        }
        else if(el > 0 && !isNaN(el)){
            str += el
        }
    })
    return str.length > 0 ? Number(str) : NaN
  }


console.log(getNumberFromString("123"))