// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"
// STRINGSFUNDAMENTALS


function stringMerge(string1, string2, letter){
    let array1 = string1.split('')
    let array2 = string2.split('')
    let word = array1.indexOf(letter)
    let word2 = array2.indexOf(letter)
    return `${array1.slice(0, word).join('')}${array2.slice(word2).join('')}`
  }



console.log(stringMerge("hello", "world", "l"))