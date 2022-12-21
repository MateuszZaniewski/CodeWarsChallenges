// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    let newStr = string.replace(/[^a-zA-Z ]/g, "").replace( /\[\d+\]/g, '').replace(/\s/g, "").toLowerCase()
    console.log(newStr)
    let object = [...newStr].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
    return Object.keys(object).length == 26 ? true : false
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog."))