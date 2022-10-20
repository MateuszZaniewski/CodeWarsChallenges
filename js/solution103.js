// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(str){
    let newArr = []
    let numbers = ['1','2','3','4','5','6','7','8','9','0']
    str.split('').filter(function(el) {
        if(el == '0' || el == '1' || el == '2' || el == '3' || el == '4' || el == '5' || el == '6' || el == '7' || el == '8' || el == '9'){
            newArr.push('')
        } 
        else {
            newArr.push(el)
        }
    })
    return newArr.join('')
  }

console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"))