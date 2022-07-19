// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let newArr = []
    arr.forEach((element) => {
      if(element > 0){
        newArr.push(element)
      } else {
        return
      }
    })
    return newArr.reduce((a,b) => a+b,0)
}

console.log(positiveSum([1,2,3,4,5])) // 15