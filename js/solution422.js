// DESCRIPTION:
// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!


function reverseVowels(str) {
  let result = ''
  const vowelsArray = ['a','e','o','u','i','A','E','O','U','I']
  let vowels = Array.from(str).filter(el => vowelsArray.indexOf(el) !== -1).reverse()
  for(let i = 0; i < str.length; i++){
    if(vowelsArray.indexOf(str[i]) !== -1){
        result += vowels[0]
        vowels.shift()
    }
    else {
        result += str[i]
    }
  }
  return result
}

console.log(reverseVowels("Reverse Vowels In A String"))