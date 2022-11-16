// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


function noOdds( values ){
    // Return all non-odd values
    let resultArray = []
    values.forEach((el) => {
        if(el%2 == 0){resultArray.push(el)}
    })
    return resultArray
  }

console.log(noOdds([0,1,2,3]))