// Even numbers in an array 7 kyu Kata

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

/* 
    My Solution :
    1. Create new array
    2. Check for even numbers (if reminder is equal 0 its even)
    3. Push these even numbers to new Array
    4. Slice newArr to display result numbers (number parameter)

*/ 

function evenNumbers(array, number) {
    let newArr = []
    array.forEach(el => {
        if(el%2 === 0){
            newArr.push(el)
        }
    })
    return newArr.slice(-number)
}
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))
