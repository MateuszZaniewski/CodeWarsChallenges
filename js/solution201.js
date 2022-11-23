// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.


function unusedDigits(...args) {
    let digits = ''
    let allNumbers = [1,2,3,4,5,6,7,8,9,0]
    args.forEach((el) => {
        digits += el
    })
    let array = digits.split('').map((el) => el = Number(el))
    array.sort((a,b) => a - b)

    let uniques = allNumbers.filter((o) => array.indexOf(o) === -1);
    return uniques.sort((a,b) => a - b, 0).join('')
  }

console.log(unusedDigits(12, 34, 56, 78))