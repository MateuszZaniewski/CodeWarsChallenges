// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"


function solution(value){
    while(value.toString().length < 5){
        value = '0' + value.toString()
    }
    return `Value is ${value}`
  }

console.log(solution(1204))