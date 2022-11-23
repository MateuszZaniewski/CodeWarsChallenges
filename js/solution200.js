// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter(function(el) {return el%2==0})
  }

console.log(getEvenNumbers([2,4,5,6]))