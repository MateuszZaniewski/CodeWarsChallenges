// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"


function checkThreeAndTwo(array) {
    let obj = array.reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {})
    return Object.values(obj).includes(3) && Object.values(obj).includes(2) ? true : false
  }

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]))

// [7 kyu] Check three and two
