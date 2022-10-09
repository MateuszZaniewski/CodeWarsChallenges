// DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
    if(Math.sqrt(sq) % 1 == 0){
        for(let i = (sq +1); i < (sq + 10000000); i++){
            if(Math.sqrt(i) % 1 == 0){
                return i
            }
        }
    } else {
        return -1
    }
  }

console.log(findNextSquare(625))