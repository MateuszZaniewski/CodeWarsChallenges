// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


function isSortedAndHow(array) {
    let ascending = [...array].sort((a,b) => a - b).toString()
    let descending = [...array].sort((a,b) => a - b).reverse().toString()
    return array.toString() === ascending ? "yes, ascending" : array.toString() === descending ? "yes, descending" : 'no'
}

console.log(isSortedAndHow([15, 7, 3, -8]))