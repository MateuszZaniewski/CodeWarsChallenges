// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


function switcheroo(x){
    let newString = ''
    x.split('').forEach((el) => {
        if(el == 'a'){
            newString+= 'b'
        }
        else if(el == 'b'){
            newString+= 'a'
        }
        else {
            newString+= el
        }
    })
    return newString
}

console.log(switcheroo('aabacbaa'))