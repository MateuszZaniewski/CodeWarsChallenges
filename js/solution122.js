// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:


var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    // let uniques = new Set(iterable)
    // console.log(Array.from(uniques).sort((a,b) => a - b))

    let uniques = []
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] != iterable[i+1]){
            uniques.push(iterable[i])
        }
    }
    return uniques
  }

console.log(uniqueInOrder('AAAABBBCCDAABBB'))