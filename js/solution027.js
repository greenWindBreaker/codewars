//solution027
//Sum all the numbers of a given array, except the highest and the lowest element
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

const sumArray = a => a === null || a.length < 2 ? 0 : a.reduce((acc,c)=> acc + c,0)-Math.min(...a)-Math.max(...a)

console.log(sumArray([2,34,5,6,9]))//20
console.log(sumArray(null))//0
console.log(sumArray([4]))//0
console.log(sumArray([]))//0
console.log(sumArray([2,-34,5,6,9]))//13