// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

// Examples

// Test.describe("perfect powers", function(){
//     Test.it("should work for some examples",function(){
//       Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//       Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//       Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//     });
//   });


function isPP(n){
    let newArr = []
    let sqrt = Math.floor(n/2)
    for(let i = 1; i < 100000; i++){
        for(let k = 2; k < 10; k++){
            if(Math.pow(i, k) == n){
                return ([i, k])
            }
        }
    }

    // return newArr.length > 0 ? newArr[0] : null
    
  }

console.log(isPP(8))