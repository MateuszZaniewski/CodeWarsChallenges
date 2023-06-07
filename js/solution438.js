// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false


const arrCheck = value => {
    for(let i = 0; i < value.length; i++){
        if(!Array.isArray(value[i])) {
            return false
        }
    }
    return true

}

console.log(arrCheck([[1],[2]]))


// [7 kyu] Is every value in the array an array?
