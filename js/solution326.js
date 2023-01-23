// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

const countDeafRats = function(town) {
    let arr = town.split('P')
    const leftRat = '~O'
    const rat = 2
    if(town.endsWith('P')){
        let raty = arr[0].trim()
        let ratsArray = []
        let rats = raty.split('')
        for(let i = 0 ; i < rats.length; i+=rat){
            const oneRat = rats.splice(i, rat)
            ratsArray.push(oneRat.join(''))
            i-=rat
        }
        let count = 0
        for(let i = 0; i < ratsArray.length; i++){
            if(ratsArray[i] == 'O~'){
                count++
            }
        }
        return count
    }
    else if(town.startsWith('P')){
        let raty = arr[1].trim()
        let ratsArray = []
        let rats = raty.split('')
        for(let i = 0 ; i < rats.length; i+=rat){
            const oneRat = rats.splice(i, rat)
            ratsArray.push(oneRat.join(''))
            i-=rat
        }
        let count = 0
        for(let i = 0; i < ratsArray.length; i++){
            if(ratsArray[i] == '~O'){
                count++
            }
        }
        return count
    }
    else {
        const rat = 2
        let raty = arr[0].trim()
        let raty1 = arr[1].trim()
        let ratsArray = []
        let ratsArray1 = []
        let rats = raty.split('')
        let rats1 = raty1.split('')
        for(let i = 0 ; i < rats.length; i+=rat){
            const oneRat = rats.splice(i, rat)
            ratsArray.push(oneRat.join(''))
            i-=rat
        }
        for(let i = 0 ; i < rats1.length; i+=rat){
            const oneRat = rats1.splice(i, rat)
            ratsArray1.push(oneRat.join(''))
            i-=rat
        }
        let count = 0
        for(let i = 0; i < ratsArray.length; i++){
            if(ratsArray[i] == 'O~'){
                count++
            }
        }
        for(let i = 0; i < ratsArray1.length; i++){
            if(ratsArray1[i] == '~O'){
                count++
            }
        }
        return count
    }
    
  }

  
console.log(countDeafRats("PO~O~O~O~O~O~O~O~O~O~O~~OO~O~~OO~O~~OO~O~O~O~O~  O~O~O~O~  O~O~O~"))