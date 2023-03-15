// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []


function twoHighest(arr) {
  let array = arr.sort((a,b) => a - b)
  let uniqes = Array.from(new Set(array))
  return uniqes.length > 1 ? [uniqes[uniqes.length-1], uniqes[uniqes.length-2]] : uniqes
}

console.log(twoHighest([1, 1, 1]))