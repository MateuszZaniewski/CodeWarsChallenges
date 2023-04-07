// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.


function findMissing(arr1, arr2) {
    if(arr1.length > 0 && arr2.length > 0){
        let sum1 = arr1.reduce((a,b) => a + b)
        let sum2 = arr2.reduce((a,b) => a + b)
        return (sum1-sum2)
    } 
    else if(arr1.length == 0) {
        return arr2[0]
    }
    else if(arr2.length == 0){
        return arr1[0]
    }
  }

  
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))