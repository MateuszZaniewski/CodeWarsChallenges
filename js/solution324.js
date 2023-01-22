// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    if(arr.length == 0){return 0}
    if(Math.max(...arr) < 0){return 0}
    let sub = []
    for(let i = 0; i <= arr.length; i++){
        for(let k = 0; k <= arr.length+1; k++){
            if((arr.slice(k,i)).length > 0){
                sub.push(arr.slice(k,i).reduce((a,b) => a + b))
            }
        }
    }
    return Math.max(...sub)
  }

console.log(maxSequence([20,44,3,19,18,-12,-18,-5,12,33,-17,-29,-41,-15,38,-37,-22,49,-25,-43,13,-19,46,-46,39,16,-30,15,40,-4,22,34,1,8,7,30,47,-15,-24,-48,36,30,24,-45,-14]))

console.log([23,21,-23,-34,39,-19,33,-12,-34,16,43,-20,-28,21,-45,28,19,-50,-15,-39,16,-12,-35,-30,-10,-1,-33,-18,-44,19,26,-7,-39,-4,-6,-7,-5,25,17,31,-20,49,-49].length)
