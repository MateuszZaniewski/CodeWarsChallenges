// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)


function nearestSq(n){
    let square = Math.round(Math.sqrt(n))
    return square*square
}

console.log(nearestSq(111))