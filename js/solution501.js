// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
    const vowels = ['A','a','E','e','O','o','U','u','I','i']
    let output = s.split('').map((el) => {
        if(vowels.indexOf(el) > -1){
            return el = 1
        } else {
            return el = 0
        }
    }).join('')
    return output
  }

console.log(vowelOne("aeiou, abc"))