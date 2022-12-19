// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let newArr = []
    let zeros = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zeros++
        }
        else {
            newArr.push(arr[i])
        }
    }
    for(let i = 1; i <= zeros; i++){
        newArr.push(0)
    }
    return newArr
  }

console.log(moveZeros([
    3,     '7', '3',  8,   '8',
    null,  '7', null, 4,   {},
    4,     8,   '6',  1,   [],
    4,     '5', '5',  '6', 5,
    false
  ]))