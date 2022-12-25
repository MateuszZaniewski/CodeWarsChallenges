// // DESCRIPTION:
// // To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

// // Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

// // Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

// // if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

// // Dots over i's and any other letters don't count as rings.

// To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

// Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

// Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

// if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

// Dots over i's and any other letters don't count as rings.


function olympicRing(a){
    let oneRings = ['o' , 'O' , 'b' , 'p' , 'P' , 'e' , 'a' , 'A' , 'g' , 'd' , 'D' , 'R' , 'q' , 'Q']
    let twoRings = ['B']
    let ones = [...a].filter((o) => oneRings.indexOf(o) > -1).length
    let twos = [...a].filter((o) => twoRings.indexOf(o) > -1).length
    let sum = Math.floor((ones + (twos*2))/2)
    return sum <= 1 ? 'Not even a medal!' : sum == 2 ? 'Bronze!' : sum === 3 ? 'Silver!' : 'Gold!'
}

console.log(olympicRing('EWlZlDFsEIBufsalqof'))