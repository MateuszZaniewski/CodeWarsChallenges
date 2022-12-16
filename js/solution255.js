// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.


function countRedBeads(n) {
    let reds = 0
    for(let i = 2; i <= n; i++){
            reds+= 2
    }
    return n > 2 ? reds : 0
  }

console.log(countRedBeads(1))