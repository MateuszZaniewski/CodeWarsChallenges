// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    let newArr = []
    str.split(' ').forEach((word) => newArr.push(word.split('').reverse().join('')))
    return newArr.join(' ')
  }

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))