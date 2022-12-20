// To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.

// Task
// Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

// The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

// Partridge
// PearTree
// Chat
// Dan
// Toblerone
// Lynn
// AlphaPapa
// Nomad
// If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!

function part(x){
    exMark = '!'
    let phrases = [`Partridge`, `PearTree`, `Chat`, `Dan` ,`Toblerone` ,`Lynn` ,`AlphaPapa` ,`Nomad`]
    let uniques = x.filter((o) => phrases.indexOf(o) > -1).length
    return uniques > 0 ? `Mine's a Pint${exMark.repeat(uniques)}` : `Lynn, I've pierced my foot on a spike!!`
}

console.log(part(["Grouse","Chat","Dan","PearTree","Robin","Emu","Square","Dan","Emu","Graham","Dan","PearTree","Nomad","Square"]))