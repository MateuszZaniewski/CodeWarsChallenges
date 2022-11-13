// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


function remove (string) {
      //coding and coding....
  let reverseString = (string.split('').reverse())
  console.log(reverseString)
  for(let i = 0; i < reverseString.length; i++){
    if(reverseString[i] == '!'){
      reverseString.splice(0, 1)
      return reverseString.reverse().join('')
    } 
    else if(reverseString[i] != '!'){
      return reverseString.reverse().join('')
    }
    }
  return reverseString
  }

console.log(remove("Hi!!!"))