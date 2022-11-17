// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


function findLongest(array){
    // code here
    let lenghtArray = []
    array.forEach((el) => {
        lenghtArray.push(el.toString().length)
    })
    let max = Math.max(...lenghtArray)
    for(let i = 0; i < array.length ; i++){
        if(array[i].toString().length == max){
            return array[i]
        }
    }
  }

console.log(findLongest([9000, 8, 800, 6000]))