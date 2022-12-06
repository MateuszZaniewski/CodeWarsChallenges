// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.




function divCon(x){
    let strArr = []
    let numArr = []
    for(let i = 0; i < x.length ;i++){
        if(typeof x[i] == 'number'){ numArr.push(x[i])}
        else{strArr.push(x[i])}
    }
    let strArrNums = strArr.map(Number)
    if(strArrNums.length == 0){
        return (numArr.reduce((a,b) => a + b))
    }
    else if(numArr.length == 0){
        return -(strArrNums.reduce((a,b) => a + b))
    }
    else {
        return numArr.reduce((a,b) => a + b) - strArrNums.reduce((a,b) => a + b)
    }

    
}

console.log(divCon([
    8, 0, 0, 8, 5,
    7, 2, 3, 7, 8,
    6, 7
  ]))