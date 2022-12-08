// DESCRIPTION:
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters


function kebabize(str) {
    let newString = ''
    const regex = /[A-Za-z]/
    for(let i = 0; i < str.length; i++){
        if(regex.test(str[i])){
            newString += str[i]
        }
    }
    let finalString = ''
    for(let i = 0; i < newString.length; i++){
        if(newString[i] == newString[i].toUpperCase()){
            if(i != 0){
                finalString += `-${newString[i].toLowerCase()}`
            } else {
                finalString += `${newString[i].toLowerCase()}`
            }  
        }
        else {
            finalString += newString[i]
        }
    }
    return finalString
  }

console.log(kebabize('WW1la'))