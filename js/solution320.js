// The idea for this kata came from 9gag today:

// The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet

// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

const NATO = {
    a: 'Alfa',
  n: 'November',
  b: 'Bravo',
  o: 'Oscar',
  c: 'Charlie',
  p: 'Papa',
  d: 'Delta',
  q: 'Quebec',
  e: 'Echo',
  r: 'Romeo',
  f: 'Foxtrot',
  s: 'Sierra',
  g: 'Golf',
  t: 'Tango',
  h: 'Hotel',
  u: 'Uniform',
  i: 'India',
  v: 'Victor',
  j: 'Juliett',
  w: 'Whiskey',
  k: 'Kilo',
  x: 'Xray',
  l: 'Lima',
  y: 'Yankee',
  m: 'Mike',
  z: 'Zulu'
}

// 26 L

function to_nato(words) {
    console.log(words)
      let preString = words.split(' ').join('').toLowerCase()
      console.log(preString)
      let output = []
      for(let i = 0 ; i < preString.length; i++){
          for(let k = 0; k < Object.keys(NATO).length; k++){
              if(preString[i] === Object.keys(NATO)[21]){
                  output.push('X-ray')
                  i++
              }
              else if(preString[i] === Object.keys(NATO)[k]){
                  output.push(Object.values(NATO)[k])
              }
              else if(preString[i] == '!'){
                  output.push('!')
                  i++
              }
              else if(preString[i] == '?'){
                  output.push('?')
                  i++
              }
              else if(preString[i] == ','){
                  output.push(',')
                  i++
              }
              else if(preString[i] == '.'){
                  output.push('.')
                  i++
              }
          }
          
      }
      return output.join(' ')
  }

console.log(to_nato('If you can read'))

// India Yankee Uniform Alfa November Romeo Alfa Delta
// India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta
// India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta