// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)


String.prototype.camelCase=function(){
    let result = ''
    this.split(' ').forEach((str) => {
        const [firstLetter, ...rest] = str
        firstLetter ? result += firstLetter.toUpperCase() + rest.join('') : ''
            
  })
    return result
}

console.log(''.camelCase())