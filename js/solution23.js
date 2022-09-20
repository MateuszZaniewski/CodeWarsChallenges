// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// My solution :
/*
    1. Create counter to check for repeat elements
    2. Split, sort and turn to lowerCase given string
    3. Loop through given string and find duplicates (if find counter++)
    4. If counter is above 0, there are duplicates.
*/

function isIsogram(str){
    let counter = 0
    let sorted = str.toString().toLowerCase().split('').sort()
    for( let i = 0; i < sorted.length ; i++){
        console.log(sorted[i])
        if(sorted[i] === sorted[i+1]){
            counter++
        } else {
            counter
        }
    }
    if(counter >= 1){
        return false
    } else {
        return true
    }
  }
console.log(isIsogram("isIsogram"))