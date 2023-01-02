// Given an array of numbers, return a string made up of four parts:

// a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

// the same as above, post sorting the array into ascending order,

// the same as above, post sorting the array into descending order,

// the same as above, post converting the array into ASCII characters and sorting alphabetically.

// The four parts should form a single string, each part separated by a hyphen (-).

// Example format of solution: "asdf-tyui-ujng-wedg"

// Examples
// [111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
// [66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
// [99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"


function sortTransform(a){
    let array = []
    let words = (String.fromCharCode(...a))
    array.push([words[0],words[1],words[words.length-2],words[words.length-1]])
    a.sort((a,b) => a- b)
    let wordsy = (String.fromCharCode(...a))
    array.push([wordsy[0],wordsy[1],wordsy[wordsy.length-2],wordsy[wordsy.length-1]])
    a.reverse()
    let word = (String.fromCharCode(...a))
    array.push([word[0],word[1],word[word.length-2],word[word.length-1]])
    let asc = (String.fromCharCode(...a)).split('').sort()
    array.push([asc[0],asc[1],asc[asc.length-2],asc[asc.length-1]])
    return `${array[0].join('')}-${array[1].join('')}-${array[2].join('')}-${array[3].join('')}`
}

console.log(sortTransform([111, 112, 113, 114, 115, 113, 114, 110]))