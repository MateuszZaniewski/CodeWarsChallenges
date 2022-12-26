// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// If you like this Kata, please try:


function solve(s) {

    // Split by vowels -- longer version --

    let splited = s.split('')
    let substrings = []
    for(let i = 0; i < splited.length; i++){
        if(splited[i] == 'a' || splited[i] == 'e' || splited[i] == 'i' || splited[i] == 'o' || splited[i] == 'u'){
            substrings.push('$')
        }
        else {
            substrings.push(splited[i])
        }
    }

    let subs = (substrings.join('').split('$'))

    // Split by vowels -- shorter version --
    //
    //  let b = s.split(/[aeiou]+/)
    //

    let newArr = []
    subs.forEach((el) => {
        if(el.length > 0){
            if(el.length > 1){
                let amount = el.split('')
                let sum = 0
                for(let i = 0; i < amount.length; i++){
                    sum += amount[i].charCodeAt(0)-96
                }
                newArr.push(sum)
            } else if(el.length == 1) {
                let sum = el.charCodeAt(0)-96
                newArr.push(sum)
            }
               
        }
    })
    return Math.max(...newArr)
  };

console.log(solve("chruschtschov"))