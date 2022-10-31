// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
	let lastDigitRow = n*n+(n-1)
    let resultArr = []
    let count = 0
    for(let i = lastDigitRow; i > 0; i--){
        if(i%2 == 1){
            resultArr.push(i)
        }
    }
    return resultArr.slice(0,n).reduce((a,b) => a + b)
}

console.log(rowSumOddNumbers(5))