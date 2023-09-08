// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.


function bingo(a) {
    const chars = a.map(number => String.fromCharCode(number + 64))
    return chars.includes('B') && chars.includes('I') && chars.includes('N') && chars.includes('G') && chars.includes('O') ? 'WIN' : 'LOSE'
  }

console.log(bingo([21,13,2,7,5,14,7,15,9,10]))


// [7 kyu] Bingo ( Or Not )
