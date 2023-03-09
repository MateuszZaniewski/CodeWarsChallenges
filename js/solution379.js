// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

// Output should have 2 digits precision.

function heron(a, b, c) {
    let s = (a + b + c) /2
    return Number(Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2))
  }

console.log(heron(2,3,4))