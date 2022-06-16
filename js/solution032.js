//solution032 updated
//Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer
//0 = 0

const cockroachSpeed = s => s === 0 ? 0 : Math.floor(s*100000/3600)

console.log(cockroachSpeed(1.08))//30