// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"



function replace(s){
    //coding and coding....
    return s.split('').map((word) => {
        if(word == 'a' || word == 'e' || word == 'i'|| word == 'o'|| word == 'u'|| word == 'A'|| word == 'E'|| word == 'I'|| word == 'O'|| word == 'U'){
           return word = '!'
        } else {
            return word
        }
    }).join('')
  }

console.log(replace("!Hi! Hi!"))