// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){

    let lowerCaseWord = word.toLowerCase()
    let result = ''
    let array = lowerCaseWord.split('').sort()
    let duplicates = []
    for(let i = 0 ; i < array.length; i++){
        if(array[i] == array[i+1]){
            duplicates.push(array[i])
        }
    }
    let dupArr = Array.from(new Set(duplicates))
    for(let i = 0 ; i < lowerCaseWord.length; i++){
        if(dupArr.includes(lowerCaseWord[i])){
            result += ')'
        } else {
            result += '('
        }
    }
    return result
}

console.log(duplicateEncode("Success"))