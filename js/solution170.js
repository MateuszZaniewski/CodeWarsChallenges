// DESCRIPTION:
// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!


function alphabetWar(fight){
   let letfside = 0
   let rightside = 0
   let battle = fight.split("").forEach((el) => {
    if(el == 'w'){letfside+=4}
    else if(el == 'p'){letfside+=3}
    else if(el == 'b'){letfside+=2}
    else if(el == 's'){letfside++}
    else if(el == 'm'){rightside+=4}
    else if(el == 'q'){rightside+=3}
    else if(el == 'd'){rightside+=2}
    else if(el == 'z'){rightside++}
   })
   return letfside > rightside ? 'Left side wins!' : letfside == rightside ? "Let's fight again!" : 'Right side wins!'
}

console.log(alphabetWar("zdqmwpbs"))