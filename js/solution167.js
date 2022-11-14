// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


function SeriesSum(n)
{
  // Happy Coding ^_^
  let result = 0
  let inc = 2
  for(let i = 1; i <= n; i++){
    if(n == 0){
        return result = '0.00'
    }
    else if(n == 1){
        return result = '1.00'
    }
    else if(i == 1){
        result += 1
    }
    else if(i > 1){
        result += 1/(i+inc)
        inc+=2
    }
  }
  let res = result.toString()
  return parseFloat(res).toFixed(2)
}

console.log(SeriesSum(59))