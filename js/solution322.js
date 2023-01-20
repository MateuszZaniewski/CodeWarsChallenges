// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"


function abbreviate(string) {
    let arr = string.split(' ')
    let a = []
    arr.forEach((el) => {
        if(el.includes('-') && el.length >= 4){
            let b = el.split('-')
            let c = []
            b.forEach((el) => {
                if(el.length >= 4)
                c.push(`${el[0]}${el.length-2}${el[el.length-1]}`)
            })
            a.push(c.join('-'))
        }
        else if(el.length <= 4 && el.endsWith('!')){
            a.push(el)
        }
        else if(el.length >= 5 && el.endsWith('!')){
            let v = el.slice(0,-1)
            a.push(`${v[0]}${v.length-2}${v[v.length-1]}!`)
        }
        else if(el.length <=4 && el.endsWith(',')){
            a.push(el)
        }
        else if(el.length >= 5 && el.endsWith(',')){
            let v = el.slice(0,-1)
            a.push(`${v[0]}${v.length-2}${v[v.length-1]},`)
        }
        else if(el.length >= 4){
            a.push(`${el[0]}${el.length-2}${el[el.length-1]}`)
        }
        else if(el.length < 4){
            a.push(el)
        }
    })
    return a.join(' ')
  }

console.log(abbreviate("You need, need not want, to complete this code-wars mission"))