// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true


function hasSurvived(attackers, defenders){
    let atk = 0
    let deff = 0 
    for(let i = 0; i < attackers.length; i++){
        console.log(attackers[i], defenders[i])
        if(attackers[i] > defenders[i]){
            atk++
        }
        else if(attackers[i] < defenders[i]){
            deff++
        }
        else if(attackers[i] == undefined){
            deff++
        }
        else if(defenders[i] == undefined){
            atk++
        }
    }
    console.log([atk,deff])
    if(atk > deff){ return false}
    else if(atk < deff){ return true}
    else if(attackers.length > 1 && defenders.length > 1){
        let atackpower = attackers.reduce((a,b) => a + b)
        let defencepower = defenders.reduce((a,b) => a + b)
        return atackpower > defencepower ? false : true
    }
    else {
        return true
    }
  }

  
console.log(hasSurvived([78,34,34,40,24,48,79,92,3,95],[84,50,51,13,68,32,77,3,17,94]))