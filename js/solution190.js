// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.




function digits(n) {
    if(n == Number(n.toString().split('').length)){
      return n
    } else {
      return Number(n.toString().split('').length)
    }
  }


console.log(digits(55))