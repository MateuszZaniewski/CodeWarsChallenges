// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative


function getAges(sum,difference){
    const hAge = (sum + difference) / 2
    const lAge = (sum - hAge)
    if(hAge < 0 || lAge < 0 || sum < 0 || difference < 0){ return null}
    return [hAge, lAge]
};

console.log(getAges(24,4))