// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


function largest(n,xs){
    let array = [...xs]
    console.log(array)
    array.sort((a,b) => a - b).reverse()
    let biggest = []
    for(let i = 0; i < n; i++){
        biggest.push(array[0])
        array.shift()
    }
    return biggest.sort((a,b) => a - b)
}

console.log(largest(2,[10,9,8,7,6,5,4,3,2,1]))