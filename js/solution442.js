// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
    let array = []
    for(let i = 0; i < s.length; i++){
        let substring = ''
        substring += s[i].toUpperCase()
        substring += s[i].toLowerCase().repeat(i)
        array.push(substring)
    }
    return array.join('-')
}

console.log(accum("ZpglnRxqenU"))