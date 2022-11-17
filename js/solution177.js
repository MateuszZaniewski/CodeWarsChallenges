// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array. || 101 || 105 || 111 || 117



function isVow(a){
    let array = []
    for(let i = 0; i < a.length; i++){
        if(a[i] == 97){
            array.push('a')
        }
        else if(a[i] == 101){
            array.push('e')
        }
        else if(a[i] == 105){
            array.push('i')
        }
        else if(a[i] == 111){
            array.push('o')
        }
        else if(a[i] == 117){
            array.push('u')
        }
        else {array.push(a[i])}
    }
    return array
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))