// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


function reverse(str){
        let spl = str.split(' ')
        let array = []
        for(let i = 0 ; i < spl.length; i ++){
            if(i%2 != 0){
                array.push(spl[i].split('').reverse().join(''))
            }
            else {
                array.push(spl[i])
            }
        }
        return str.trim().length > 0 ? array.join(' ') : ''
  }

console.log(reverse("Reverse this string, please!"))