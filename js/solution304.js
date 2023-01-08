// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'


function dashatize(num) {
    if(isNaN(num)){ return 'NaN'}
    if(num < 0) { num = Math.abs(num)}
    let array = num.toString().split('')
    let newArr = []
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            newArr.push(array[i])
        }
        else if(array[i]%2 !=0){
            newArr.push('-')
            newArr.push(array[i])
            newArr.push('-')
        }
    }
    let remover = []
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] == '-' && newArr[i+1] == '-'){
            remover.push(newArr[i])
            i++
        }
        else {
            remover.push(newArr[i])
        }
    }

    if(remover.join('').endsWith('-') && remover.join('').startsWith('-')){
        return remover.join('').slice(0,-1).slice(1)
    }
    else if(remover.join('').endsWith('-')){
        return remover.join('').slice(0,-1)
    }
    else if(remover.join('').startsWith('-')){
        return remover.join('').slice(1)
    }
    else {
        return remover.join('')
    }
  }

console.log(dashatize(974302))