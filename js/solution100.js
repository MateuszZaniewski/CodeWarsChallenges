// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example


function titleCase(title, minorWords) {
    const minorArr = minorWords ? minorWords.toLowerCase().split(' ') : []; // -- jeśli minorwords nie jest undefined to 
                                                                            // tolowerCase.split a jak nie to return []
    return title.toLowerCase()
      .split(' ')
      .map((word, i) => { // mapujemy wartości słowa i indexu
        console.log(word) // <-- słowo
        console.log(i) // <-- index słowa
        if (!word) return word; // wykrywa puste znaki 
        if (minorArr.indexOf(word) !== -1 && i !== 0) return word; // jeśli słowo nie zawiera się w minorWords i nie jest pierwszym słowem w arrayu to zostawiamy je jako lowerCase
        
        return word[0].toUpperCase() + word.slice(1); // zwracamy słowo[0] z dużej litery, a reszte z pomocą slice(bez 1 słowa)
      })
      .join(' '); // łączymy array w stringa
  }

console.log(titleCase('a clash of KINGS', 'a an the of'))