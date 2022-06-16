// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

/*
    My solution :
    1. Create two vars that contains number of x's and number of o's.
    2. Convert original string to lowerCase characters and split it to and array.
    3. For every element in array check if it equals 'x' or 'o' and add number to
       different variable.
    4. Having all elements match their variables, compare results and find if they
       are equal or not.

*/
function XO(str) {
    let numOfX = 0
    let numOfO = 0
    str = str.toLowerCase().split('')
    str.forEach(el => {
        if(el === 'x'){
            numOfX++
        }
        else if(el === 'o'){
            numOfO++
        }
    })
    if(numOfO === numOfX) return true;
    else return false
}

console.log(XO("XXOO"))
