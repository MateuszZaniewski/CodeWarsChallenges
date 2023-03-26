// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)



function longestRepetition(s) {
    if(s.length == 0) { return ['', 0]}
    else {
        let substrings = [];
        let currentChar = '';
        let currentSubstring = '';
        for (let i = 0; i < s.length; i++) {
          let char = s.charAt(i);
          if (char !== currentChar) {
            if (currentSubstring !== '') {
              substrings.push(currentSubstring);
            }
            currentChar = char;
            currentSubstring = char;
          } else {
            currentSubstring += char;
          }
        }
        if (currentSubstring !== '') {
          substrings.push(currentSubstring);
        }
        console.log(substrings)

        function maxLengthElement(arr) {
            return arr.reduce(function(acc, curr) {
              return curr.length > acc.length ? curr : acc;
            }, '');
          }

        let maxElement = maxLengthElement(substrings)
        return [maxElement[0], maxElement.length]
    }
        
  }

console.log(longestRepetition('bbbaaabaaaa'))