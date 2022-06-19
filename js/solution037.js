//solution037
//write a function that accepts three parameters:
//cap is the amount of people the bus can hold excluding the driver.
//on is the number of people on the bus excluding the driver.
//wait is the number of people waiting to get on to the bus excluding the driver.
//If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

const enough = (cap,on,wait)=> cap >= on + wait ? 0 : on+wait-cap

console.log(enough(100,50,50))//0
console.log(enough(10,6,6))//2