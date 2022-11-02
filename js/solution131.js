// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:


function meeting(s) {
    // your code
    let newArr = []
    let one = (s.toUpperCase().split(';'))
    for(let i = 0; i < one.length; i++){
       newArr.push(one[i].split(':').reverse().join(', '))
    }
    let sorted = newArr.sort()
    let result = `(${sorted.join(')(')})`
    return result
}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))