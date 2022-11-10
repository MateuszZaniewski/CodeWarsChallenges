// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 1 -> 1
//   "    ***    ", 2 -> 3
//   "   *****   ", 3 -> 5
//   "  *******  ", 4 -> 7
//   " ********* ", 5 -> 9
//   "***********"  6 -> 11
// ]


function towerBuilder(nFloors) {
    // build here
    let astrix = '*'
    let space = ' '
    let newArr = []
    for(let i = 0; i <= nFloors; i++){
        if(i > 0){
            newArr.push((`${space.repeat(nFloors-i)}${astrix.repeat((i*2)-1)}${space.repeat(nFloors-i)}`))
        }
        
    }
    return newArr
  }

console.log(towerBuilder(6))