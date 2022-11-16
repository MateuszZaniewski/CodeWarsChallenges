// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"


function remove (string) {
    let counter = 0
    let array = string.split('')
    console.log(array)
    for(let i = array.length -1; i > 0; i--){
        if(array[i] != '!'){
            return array.splice(0, (array.length - counter)).join('')
        }
        else {
            counter++
        }
    }
  }

console.log(remove("Hi!!!"))