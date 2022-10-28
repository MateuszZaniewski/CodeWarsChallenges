// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    let firstCap = ''
    let secondCap = ''
    let finalArray = []
    for( let i = 0; i < s.length; i++){
        if(i%2==0){
            firstCap += s[i].toUpperCase()
            secondCap += s[i]
        } else {
            firstCap += s[i]
            secondCap += s[i].toUpperCase()
        }
    }
    finalArray.push(firstCap, secondCap)
    return finalArray
  };

console.log(capitalize("abcdef"))