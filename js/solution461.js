// DESCRIPTION:
// In genetics a reading frame is a way to divide a sequence of nucleotides (DNA bases) into a set of consecutive non-overlapping triplets (also called codon). Each of this triplets is translated into an amino-acid during a translation process to create proteins.

// Input
// In a single strand of DNA you find 3 Reading frames, take for example the following input sequence:

// AGGTGACACCGCAAGCCTTATATTAGC
// Output
// For the output we are going to take the combinations and show them in the following manner:

// Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
// Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
// Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C
// For frame 1 split all of them in groups of three starting by the first base (letter).

// For frame 2 split all of them in groups of three starting by the second base (letter) but having the first base (letter) at the beggining.

// For frame 3 split all of them in groups of three starting by the third letter, but having the first and second bases (letters) at the beginning in the same order.


const decomposeSingleStrand = ( singleStrand) => {
    const firstEl = singleStrand[0]
    const twoFirst = singleStrand[0]+singleStrand[1]
    const regex = /.{1,3}/g
    const splitBy3 = singleStrand.match(regex).join(' ')
    const splitBy3from1 = singleStrand.slice(1).match(regex)
    const splitBy3from2 = singleStrand.slice(2).match(regex)
    splitBy3from1.unshift(firstEl)
    splitBy3from2.unshift(twoFirst)
    const frame1 = splitBy3
    const frame2 = splitBy3from1.join(' ')
    const frame3 = splitBy3from2.join(' ')
    return `Frame 1: ${frame1}\nFrame 2: ${frame2}\nFrame 3: ${frame3}`
  }

console.log(decomposeSingleStrand("AGGTGACACCGCAAGCCTTATATTAGC"))