// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

function encryptThis(text) {
    // Implement me! :)
    let newText = ''
    console.log(text)
    text.split(" ").forEach((el) => {
        for( let i = 0; i < el.length; i++){
            if(text.length !=1){
                const secondChar = el[1]
                const lastChar = el[el.length -1 ]
                if(i == 0 && el.length == 1){
                    newText += `${el.charCodeAt(0)} `
                }
                else if(i == 0){
                    newText += (el.charCodeAt(0))
                }
                else if(i == 1 && el.lenght == 2){
                    newText += `${lastChar} `
                }
                else if(i == 1 && el.length > 2){
                    newText += lastChar
                }
                else if(i == el.length-1){
                    newText += `${secondChar} `
                }
                else {
                    newText += el[i]
                }
            }
            else {
                newText = (el.charCodeAt(0))
            }
            
        }
    })
    return text.length > 1 ? newText.trim() : newText.toString()
    }
  console.log(encryptThis("A wise old owl lived in an oak"))

