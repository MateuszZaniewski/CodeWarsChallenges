// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


function noBoringZeros(n) {
    let string = n.toString().split('')
    for(let i = 0; i < string.length*2; i++){
        if(string[string.length-1] == '0'){
            console.log(string)
            string.splice(-1)
        }
    }
    return Number(string.join(''))
  }

console.log(noBoringZeros(960000))