//solution158

//SUM ARRAYS.. Write a function that takes an array of numbers and returns the sum of the numbers.
function sum (numbers) {
    return numbers.reduce((acc,c)=> acc+ c,0);
}; 
console.log(sum([5,3,6,8,33,4,7,9]))

//ARRAY PLUS ARRAY.. get the sum of two arrays
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc,c)=> acc + c,0) + arr2.reduce((acc,c)=>acc+c,0);
}