// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


const orderedCount = function (text) {
    let array = text.split('')
    let newArr = []
    let fin = []
    for(let i = 0 ; i < text.length; i++){
        newArr.push([ text[i], text.match(new RegExp(text[i], 'g')).length])
        
    }
    newArr = newArr.flat()
    for(let i = 0 ; i < newArr.length; i++){
        if(!fin.includes(newArr[i])){
            fin.push(newArr[i],newArr[i+1])
        }
    }
    let finalArray = []
    const chunkSize = 2;
        for (let i = 0; i < fin.length; i += chunkSize) {
        const chunk = fin.splice(i, chunkSize);
        finalArray.push(chunk)
        i-=2
    }
    return finalArray
  }
  
console.log(orderedCount("abracadabra"))