// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


function cockroachSpeed(s) {
    // km/h = 1000m/60m = 100000cm/3600s = 27,7cm/s
    const cmspeed = 100000/3600
    let speed = Math.floor(s*cmspeed)
    return speed
  }

console.log(cockroachSpeed(2.7064621664724093))