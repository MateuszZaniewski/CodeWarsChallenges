// ###Lucky number

// Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

// 1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

// Function will return true for lucky numbers and false for others.



function isLucky(n) {
    return n.toString().split('').map(Number).reduce((a,b) => a + b) % 9 == 0 ? true : false
  }

console.log(isLucky(1892376))