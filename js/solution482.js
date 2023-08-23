// Task :
// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

// Input >> Output Examples
// 1- minimumNumber ({3,1,2}) ==> return (1)
// Explanation:
// Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
// 2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
// Explanation:
// Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
// 3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
// Explanation:
// Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .


function minimumNumber(numbers){
    let missingNumber = 0
    let sum = numbers.reduce((a,b) => a + b)
    //check for sum to be a prime number, so it returns sum
    const isPrime = (num) => {
        if (num <= 1) {
            return false;
        }
        if (num <= 3) {
            return true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
            return false;
        }
        
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }
    // if sum is not a prime number, check for next prime
    const isNextPrime = (num) => {
        num = Math.max(num, 2);
    
        while (!isPrime(num)) {
            missingNumber++
            num++;
        }
    
        return missingNumber;
        }

    return isNextPrime(sum)
    }



console.log(minimumNumber([2,12,8,4,6]))