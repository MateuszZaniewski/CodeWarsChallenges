// DESCRIPTION:
// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------
// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)

function presses(phrase) {
    let array = phrase.toLowerCase().split('')
    console.log(array)
    let count = 0
    if(phrase == '1'){
      return count = 1
    }
    for(let i = 0; i < array.length; i++){
      if(array[i] == 'a' || array[i] == 'd' ||array[i] == 'g' ||array[i] == 'j' ||array[i] == 'm' ||array[i] == 'p' ||array[i] == 't' ||array[i] == 'w'|| array[i] == ' '|| array[i] == '1'){
        count++
      }
      else if(array[i] == 'b' || array[i] == 'e'|| array[i] == 'h'|| array[i] == 'k'|| array[i] == 'n'|| array[i] == 'q'|| array[i] == 'u'|| array[i] == 'x'|| array[i] == '0'){
        count+=2
      }
      else if(array[i] == 'c' || array[i] == 'f'|| array[i] == 'i'|| array[i] == 'l'|| array[i] == 'o'|| array[i] == 'r'|| array[i] == 'v'|| array[i] == 'y'){
        count+=3
      }
      else if(array[i] == 's' || array[i] == 'z' || array[i] == '2'|| array[i] == '3'|| array[i] == '4'|| array[i] == '5'|| array[i] == '6'|| array[i] == '8'){
        count+=4
      }
      else if(array[i] == '7' || array[i] == '9'){
        count+=5
      }
    }
    return count
  }

console.log(presses("IS NE1 OUT THERE"))


// || array[i] == '0'|| array[i] == '1'|| array[i] == '2'|| array[i] == '3'|| array[i] == '4'|| array[i] == '5'|| array[i] == '6'|| array[i] == '7'|| array[i] == '8'|| array[i] == '9'