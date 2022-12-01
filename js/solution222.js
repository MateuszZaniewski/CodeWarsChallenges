// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free


function mango(quantity, price){
    let free = 0
    for(let i = 1; i <= (quantity); i++){
        if(i%3 == 0){
            free++
            console.log(i)
        }
    }
    return free > 0 ? (quantity*price)-(free*price) : quantity*price
}

console.log(mango(9,5))