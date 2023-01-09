// DESCRIPTION:
// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let vowels = ['a','e','i','o','u']
    return str.split('').filter(char => /[a-zA-Z]/.test(char)).filter((o) => vowels.indexOf(o) === -1).length
  }

console.log(consonantCount('h^$&^#$&^elLo world'))