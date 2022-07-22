//solution093
//Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.
//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/solutions/javascript

const isReallyNaN = val => val !== val

console.log(isReallyNaN(90))
console.log(isReallyNaN('90'))
console.log(isReallyNaN('ten'))
console.log(isReallyNaN(null))
console.log(isReallyNaN(undefined))
console.log(isReallyNaN(false))
console.log(isReallyNaN(true))
console.log(isReallyNaN(0))
console.log(isReallyNaN(NaN))//true