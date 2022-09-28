// DESCRIPTION:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array
function countSmileys(arr) {
    // valid cases :  :) :-) :~) ;) ;-) ;~) :D :-D :~D ;D ;-D ;~D
    console.log(arr)
    let counter = 0
    arr.forEach((element) => {
        // if(element.includes(':)' || ':-)' || ':~)' || ';)' || ';-)' || ';~)' || ':D' || ':-D' || ':~D' || ';D' || ';-D' || ';~D')){
        //     counter ++
        // }
        if(element == ':)') {counter ++}
        else if(element == ';~D') {counter ++}
        else if(element == ':-)') {counter ++}
        else if(element == ':~)') {counter ++}
        else if(element == ';)') {counter ++}
        else if(element == ';-)') {counter ++}
        else if(element == ';~)') {counter ++}
        else if(element == ':D') {counter ++}
        else if(element == ':-D') {counter ++}
        else if(element == ':~D') {counter ++}
        else if(element == ';D') {counter ++}
        else if(element == ';-D') {counter ++}
    })
    return counter
}

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))