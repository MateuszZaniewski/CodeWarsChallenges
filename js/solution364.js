// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank(arr){
        let compObj =  [...arr].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
        let array = []
        for(let key in compObj){
            array.push([compObj[key], key])
        }
        return Number(array.sort((a,b) => a[0] - b[0])[array.length-1][1])
    }

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))