// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


function capitals(word) {
	// Write your code here
    let newArr = []
    word.split('').map((el) => {
        if(el == el.toUpperCase()){
         newArr.push(word.indexOf(el))
        }
    })
    return newArr
};

console.log(capitals('CodEWaRs'))