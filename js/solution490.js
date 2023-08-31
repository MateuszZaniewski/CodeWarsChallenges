// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'


function initializeNames(name){
    const convertName = (name) => {
        let result = []
        let array = name.split(' ')
        array.forEach(el => {
            if(el == array[0] || el == array[array.length-1]){
                result.push(el)
            }
            else {
                result.push(`${el[0].toUpperCase()}.`)
            }
        })
        return result.join(' ')
    }
    convertName(name)
    return name.split(' ').length < 2 ? name : convertName(name)
  }

console.log(initializeNames("Lois Mary Mateusz Lane"))