//solution095
//Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.
//a is considered "close to" b if margin is greater than or equal to the distance between a and b
//When a is close to b, return 0.
//When a is less than b, return -1
//When a is greater than b, return 1.
//If margin is not given, treat it as zero.

const closeCompare = (a,b,margin) => b-a === 0 || Math.abs(b-a) <= margin? 0 : a>b? 1 : -1

console.log(closeCompare(5,5))//0
console.log(closeCompare(4,5))//-1
console.log(closeCompare(6,5))//1
console.log(closeCompare(-6,-5))//-1
console.log(closeCompare(2,5,3))//0
console.log(closeCompare(8.1,5,3))//1