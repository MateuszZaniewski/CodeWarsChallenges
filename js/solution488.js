// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1


function countLettersAndDigits(input) {
    return input.split('').filter(function(el) {
        return ( el.charCodeAt(0) > 64 && el.charCodeAt(0) <= 90 ) || 
         (el.charCodeAt(0) > 47 && el.charCodeAt(0) <= 57) ||
         ( el.charCodeAt(0) > 96 && el.charCodeAt(0) <= 122 )
    }).length
  }

console.log(countLettersAndDigits("hel2!lo"))