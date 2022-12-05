// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .


function automorphic(n){
    let numb = n.toString()
    let square = Math.pow(n,2).toString()
    return square.endsWith(numb) ? "Automorphic" : "Not!!"
  }

console.log(automorphic(95))