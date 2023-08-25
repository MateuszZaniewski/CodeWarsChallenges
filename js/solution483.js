// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .


function specialNumber(n){
    return n.toString().split('').map(Number).filter(function(el) {
        return el <= 5
    }).length == n.toString().length ? "Special!!" : "NOT!!"
  }

console.log(specialNumber(25432))