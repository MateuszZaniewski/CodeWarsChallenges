// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.


function inArray(array1,array2){
    //...
    let newArr = []
    array2.forEach((el) => {
        for(let i = 0; i < array1.length; i++){
            if(el.includes(array1[i])){
                if(!newArr.includes(array1[i]))
                newArr.push(array1[i])
            }
        }
    })
    return newArr.sort()

  }

console.log(inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]))