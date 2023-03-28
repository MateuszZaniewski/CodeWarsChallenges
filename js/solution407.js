// DESCRIPTION:
// Emotional Sort ( ︶︿︶)
// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad
// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

// Super Happy -> Happy -> Normal -> Sad -> Super Sad
// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

// Super Sad -> Sad -> Normal -> Happy -> Super Happy
// Example:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
// More in test cases!

// Notes:

// The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
// All emotions will be valid
// Enjoy! (づ｡◕‿‿◕｡)づ


function sortEmotions(arr, order){
    if(arr.length == 0) { return []}
    else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == ':D'){
                arr[i] = 1
            }
            else if(arr[i] == ':)') {
                arr[i] = 2
            } 
            else if(arr[i] == ':|' ) {
                arr[i] = 3
            }
            else if(arr[i] == ':(') {
                arr[i] = 4
            }
            else if(arr[i] == 'T_T') {
                arr[i] = 5
            }
        }
        if(order) {
            arr.sort((a,b) => a - b)
        } else {
            arr.sort((a,b) => a - b).reverse()
        }
        for(let l = 0; l < arr.length; l++){
            if(arr[l] == 1){
                arr[l] = ':D'
            }
            else if(arr[l] == 2) {
                arr[l] = ':)'
            } 
            else if(arr[l] == 3 ) {
                arr[l] = ':|'
            }
            else if(arr[l] == 4) {
                arr[l] = ':('
            }
            else if(arr[l] == 5) {
                arr[l] = 'T_T'
            }
        }

        return arr
    }

    
  }

console.log(sortEmotions([ ':D', 'T_T', ':D', ':(' ], true))