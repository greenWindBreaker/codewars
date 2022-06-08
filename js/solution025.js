//solution025
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
const sumMix = x => x.reduce((acc,c)=> acc + +c, 0)// the +c will turn strings into number data types. the reduce() will sum it together
console.log(sumMix(['4',5]))//9
console.log(sumMix([4,5,6,7]))//22