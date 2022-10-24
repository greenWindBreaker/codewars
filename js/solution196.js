//solution196
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//ex: [1,2,3,4,5,6,7,8,9,0] -> '(123) 456-7890'

function createPhoneNumber(numbers){
    //return String(numbers).split(',')//['1','2','3'...]
    let newArr = String(numbers).split(',')
    return `(${newArr[0]+newArr[1]+newArr[2]}) ${newArr[3]+newArr[4]+newArr[5]}-${newArr[6]+newArr[7]+newArr[8]+newArr[9]}`
}
//using reduce() & replace():
//const createPhoneNumber = numbers => numbers.reduce((acc,c)=> acc.replace('x',c), "(xxx) xxx-xxxx")

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))//'(123) 456-7890'