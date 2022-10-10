// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// complete the function
function solution(string) {
    let newArr = []
    let splt = string.split('')
    for (let i = 0; i < splt.length; i++){
        if(splt[i] == splt[i].toUpperCase()){
            newArr.push(' ')
            newArr.push(splt[i])
        } else {
            newArr.push(splt[i])
        }
        
    }
    return newArr.join('')
}

console.log(solution("camelCasing"))