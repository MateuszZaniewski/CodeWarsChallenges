// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!


function capitalize(s,arr){
    let result = ''
    for(let i = 0; i < s.length ; i++){
        if(arr.includes(i)){
            result += s[i].toUpperCase()
        } else {
            result += s[i]
        }
    }
    return result
  };

console.log(capitalize("abcdef",[1,2,5]))

// [7 kyu] Indexed capitalization
