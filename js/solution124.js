// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases (input -> output):

// 1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!

function sumDigPow(a, b) {
    let resultArray = []
    for(let i = a; i <= b; i++){
            let digits = i.toString().split('')
            let realDigits = digits.map(Number)
                    if(i == Math.pow(realDigits[0],1) ||
i == Math.pow(realDigits[0],1) + Math.pow(realDigits[1],2) ||
i == Math.pow(realDigits[0],1) + Math.pow(realDigits[1],2) + Math.pow(realDigits[2],3) ||
i == Math.pow(realDigits[0],1) + Math.pow(realDigits[1],2) + Math.pow(realDigits[2],3) + Math.pow(realDigits[3],4) ||
i == Math.pow(realDigits[0],1) + Math.pow(realDigits[1],2) + Math.pow(realDigits[2],3) + Math.pow(realDigits[3],4) + Math.pow(realDigits[4],5) ||
i == Math.pow(realDigits[0],1) + Math.pow(realDigits[1],2) + Math.pow(realDigits[2],3) + Math.pow(realDigits[3],4) + Math.pow(realDigits[4],5) + Math.pow(realDigits[5],6) ||
i == Math.pow(realDigits[0],1) + Math.pow(realDigits[1],2) + Math.pow(realDigits[2],3) + Math.pow(realDigits[3],4) + Math.pow(realDigits[4],5) + Math.pow(realDigits[5],6) + Math.pow(realDigits[6],7) || 
i == Math.pow(realDigits[0],1) + Math.pow(realDigits[1],2) + Math.pow(realDigits[2],3) + Math.pow(realDigits[3],4) + Math.pow(realDigits[4],5) + Math.pow(realDigits[5],6) + Math.pow(realDigits[6],7) + Math.pow(realDigits[7],8)
                    
                       ){
                        resultArray.push(i)
                    }
                
    }
    return resultArray
   }

console.log(sumDigPow(1,1000000))