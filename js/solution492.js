// You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

// It is known that all events are recorded in chronological order and two events can't occur in the same second.

// Return the minimum number of days during which the log is written.

// Example:

// Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
// Output -> 1

// Input -> ["12:12:12"]
// Output -> 1

// Input -> ["12:00:00", "23:59:59", "00:00:00"]
// Output -> 2

// Input -> []
// Output -> 0
// Good luck


function checkLogs(log) {
    let days = 1
    const hours = []
    console.log(log)
    log.forEach((el) => {
        const [hour, minute, second] = el.split(':')
        hours.push(hour + minute + second)
    })
    console.log(hours)
    for(let i = 0; i < hours.length; i++){
        if(hours[i] > hours[i+1] || hours[i] === hours[i+1]){
            days++
        }
    }
    return log.length > 0 ? days : 0
  }

console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]))

// [7 kyu] Log without dates
