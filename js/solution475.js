// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
    let first = []
    let second = []
    if(/^[a-zA-Z]+$/.test(s1)){
        if(s1 === null){
            s1 = ''
        }
            s1.toUpperCase().split('').forEach((el) => {
                
                    first.push(el.charCodeAt(0))
                
            })
        
    }
    if(/^[a-zA-Z]+$/.test(s2)){
        if(s2 === null){
            s2 = ''
        }
            s2.toUpperCase().split('').forEach((el) => {
                
                    second.push(el.charCodeAt(0))
                
            })
        
    }
    
    return first.reduce((a,b) => a + b, 0) === second.reduce((a,b) => a + b, 0)
}

console.log(compare("AD", "BC"))