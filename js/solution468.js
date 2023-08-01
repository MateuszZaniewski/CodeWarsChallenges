// Task
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

// * 'Hello world'   => true
// * ' Hello world'  => false
// * 'Hello world  ' => false
// * 'Hello  world'  => false
// * 'Hello'         => true

// Even though there are no spaces, it is still valid because none are needed:
// * 'Helloworld'    => true
// * 'Helloworld '   => false
// * ' '             => false
// * ''              => true
// Note - there will be no punctuation or digits in the input string, only letters.




function validSpacing(s) {
  let array = []
  for(let i = 0; i < s.length; i++){
    if(s[i] == ' ' && s[i+1] === ' '){
      continue
    } else {
      array.push(s[i])
    }
  }
  return array.join('').trim() === s 
}

console.log(validSpacing('Hello  world '))