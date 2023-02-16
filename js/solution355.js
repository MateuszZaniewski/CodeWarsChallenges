// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:


// Depending on the cumulative score of the team, return the appropriate sentiment:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25
// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){

    let totalScore = 0
    let positions = (Object.values(staff))
    for(let i = 0; i < positions.length; i++){
        if(positions[i] == 'accounts' ) totalScore++
        if(positions[i] == 'finance') totalScore += 2
        if(positions[i] == 'canteen') totalScore += 10
        if(positions[i] == 'regulation') totalScore += 3
        if(positions[i] == 'trading' || positions[i] == 'change') totalScore += 6
        if(positions[i] == 'IS') totalScore += 8
        if(positions[i] == 'retail') totalScore += 5
        if(positions[i] == 'cleaning') totalScore += 4
        if(positions[i] == 'pissing about') totalScore += 25
    }
    return totalScore <= 80 ? 'kill me now' : totalScore < 100 ? 'i can handle this' : 'party time!!'
}

console.log(boredom({tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' }))