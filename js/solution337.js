// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters (string) {
    return string.split('').map(el => {
        if(el == 'ą') { return 'a'}
        else if(el == 'ć'){return 'c'}
        else if(el == 'ę'){return 'e'}
        else if(el == 'ł'){return 'l'}
        else if(el == 'ń'){return 'n'}
        else if(el == 'ó'){return 'o'}
        else if(el == 'ś'){return 's'}
        else if(el == 'ź'){return 'z'}
        else if(el == 'ż'){return 'z'}
        else return el
    }).join('')
  }

console.log(correctPolishLetters("Jędrzej Błądziński"))