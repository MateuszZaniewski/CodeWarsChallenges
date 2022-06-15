// sPoNgEbOb MeMe 7kyu Kata //

// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// "Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"


// By making new array I push the each element of string by its contition. For every
// element that have even index - its UpperCase
// for every element that have odd index - its LowerCase
// then merge all elements to string


function spongeMeme(sentence) {
    let newArr = []
    sentence.split("")
    for(let i = 0; i < sentence.length; i++){
        if(i%2 === 0){
            newArr.push(sentence[i].toUpperCase())
        }
        else if(i%2 != 0){
            newArr.push(sentence[i].toLowerCase())
        }
    }
    return newArr.join('')
}

console.log(spongeMeme("stop Making spongebob Memes!"))
