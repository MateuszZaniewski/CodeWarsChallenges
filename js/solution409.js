// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.



function mostFrequentItemCount(arr) {
    const count = {};

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
}

let maxItem = null;
let maxCount = 0;
for (const item in count) {
  if (count[item] > maxCount) {
    maxItem = item;
    maxCount = count[item];
  }
}

return maxCount
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))

