// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
    let positives = 0
    let negatives = 0
    let newArr = []
    if(input == null || input === undefined || input.length === 0){
        return newArr
    }
    else if(input.length !== 0 || input.reduce((a,b) => a+ b) != 0 || input !== undefined || input != null){
    input.forEach((el) => {
        if(el > 0){
            positives ++
        }
        else if(el < 0){
            negatives += el
        }
    })  
    newArr.push(positives,negatives)
    return newArr
    }
}   

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8;-50]

