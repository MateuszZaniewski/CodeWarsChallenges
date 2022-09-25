// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
    let arr = Array.from(string)
    let newArr = []
	arr.forEach((word) => {
        if(word == '5'){
            newArr.push('S')
        }
        else if(word == '0'){
            newArr.push('O')
        }
        else if(word == '1'){
            newArr.push('I')
        } else {
            newArr.push(word)
        }
    })
    return newArr.join('')
}

console.log(correct("L0ND0N"))