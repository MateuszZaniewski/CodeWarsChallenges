// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
    let reverseArr = []
    for(let i = 0; i < array.length; i++){
      reverseArr.unshift(array[i])
    }
    return reverseArr
  }

console.log(reverse([1,2,3]))