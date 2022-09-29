// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let newstr = ''
    let together = (s1+s2).split('').sort()
    for (let i = 0; i < together.length; i++){
            if(together[i] != together[i+1]){
                newstr += together[i]
            }
    } return newstr
  }

console.log(longest("aretheyhere", "yestheyarehere"))