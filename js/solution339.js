// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

function parseF(s) {
    if(isNaN(Number(s))) {
      return null
    }
    else if(typeof s == 'boolean'){
      return null
    }
  return Number(s)
  }

console.log(parseF(true))