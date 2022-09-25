// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


/*
    1. Turn text to lowerCase, split it and map every element that it return its HEX version.
    2. Create new array to store final values
    3. Use forEach method to loop through each element and check if it's in range between 97 and 122 (for lowerCase letters)
    4. If it is, push value to created Array (-91 for scaling to actual alphabet)
    5. Return array with correct values
*/

function alphabetPosition(text) {
    let newArr = text.toLowerCase().split('').map((element, index) => (element.charCodeAt(0)))
    let arrMax = []
    newArr.forEach((element) => {
      if(element >= 97 && element <= 122){
        arrMax.push(element-96)
      }
    })
    return arrMax.join(' ')
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))