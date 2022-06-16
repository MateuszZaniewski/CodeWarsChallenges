// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

/*
    My Solution :
    1. Check if array equals null/undefined or contains only single value, if so return 0
    2. Check for min and max values
    3. Reduce array to single value and substract min and max and return result

*/


function sumArray(array) {
    return (array === null || array === undefined || array.length <= 1) ? 0 :(array.reduce((a,b) => a + b))-(Math.min(...array))-(Math.max(...array))
}
console.log(sumArray([6, 2, 1, 8, 10]))