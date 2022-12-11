// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


function cubeOdd(arr) {
    let cubed = [] 
    let undef = false
    arr.forEach((el) => {
        if(typeof el != 'number'){
            undef = true
        }
        else if(el%2 != 0){
            cubed.push(el*el*el)
        }
    })
    return undef == true ? undefined : cubed.length > 0 ? cubed.reduce((a,b) => a + b) : 0
}

console.log(cubeOdd(['a', 1, 2, 3, 4]))