// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let srt = arr.sort()
    return srt[0] != srt[1] ? srt[0] : srt[srt.length - 1] 
     
  }

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))