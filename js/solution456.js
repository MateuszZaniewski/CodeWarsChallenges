// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
    let subArray = []
    let finalArray = []
    s.forEach((el) => {
        let array = el.split('')
        for(let i = 0 ; i < array.length ; i++){
            if(array[i] != array[i+1]){
                subArray.push(array[i])
            }
        }
        finalArray.push(subArray.join(''))
        subArray = []
    })
    return finalArray
    };

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))


// [6 kyu] String array duplicates
