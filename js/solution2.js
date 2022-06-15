// Testing 1-2-3 7kyu kata

// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

/* My solution :
1. Making new array to push expected elements
2. Declaring counter to count numbers
3. For each element pushing expected string to new Array, by
4. Return new array

*/
function addingNumbers(array){
  let newArr = []
  let counter = 1
    array.forEach(el => {
      newArr.push(counter+':'+" "+`${el}`)
      counter++
    })
  
  return newArr
  
}

console.log(addingNumbers(['a','b','c','d','e']))