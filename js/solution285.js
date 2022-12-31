// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {

    const pass = (el) => el == '#'
    if(s)
    console.log(s)
      let array = s.split('')
      for(let i = 0; i < array.length; i++){
          if(array[0] == '#'){
            array.shift()
          }
          else if(array[i+1] == '#'){
            array.splice(i,2)
            i=0
            i-=2
          }
      }
      return array.every(pass) ? '' : array.join('')
    }

console.log(cleanString('######831###dhkj####jd#dsfsdnjkf###d####dasns'))
