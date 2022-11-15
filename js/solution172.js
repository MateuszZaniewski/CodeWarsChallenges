// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.



function encode(string) {
    let decodedArray = []
    string.split('').forEach((el) => {
        if(el == 'a'){
            decodedArray.push('1')
        }
        else if(el == 'e'){
            decodedArray.push('2')
        }
        else if(el == 'i'){
            decodedArray.push('3')
        }
        else if(el == 'o'){
            decodedArray.push('4')
        }
        else if(el == 'u'){
            decodedArray.push('5')
        }
        else {
            decodedArray.push(el)
        }
    })
    return decodedArray.join('')
  }
 


  function decode(string) {
    let encodedArray = []
    string.split('').forEach((el) => {
        if(el == '1'){
            encodedArray.push('a')
        }
        else if(el == '2'){
            encodedArray.push('e')
        }
        else if(el == '3'){
            encodedArray.push('i')
        }
        else if(el == '4'){
            encodedArray.push('o')
        }
        else if(el == '5'){
            encodedArray.push('u')
        }
        else {
            encodedArray.push(el)
        }
    })
    return encodedArray.join('')
  }

console.log(encode('How are you today?'))
console.log(decode('h3 th2r2'))