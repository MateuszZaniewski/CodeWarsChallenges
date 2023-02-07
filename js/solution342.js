// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.



function stringTransformer(str) {
    let result = []
    let array = str.split(' ').reverse().join(' ').split('')
    for(let i = 0; i < array.length; i++){
        if(array[i] == ' '){result.push(array[i])}
        else if(array[i] == array[i].toLowerCase()){
            result.push(array[i].toUpperCase())
        }
        else if(array[i] == array[i].toUpperCase()){
            result.push(array[i].toLowerCase())
        }
    }
    return result.join('')
  }

console.log(stringTransformer("iNPUT eXAMPLE"))