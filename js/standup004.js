//standup004
//return the average of the given array rounded down to its nearest integer
//the array will bever empty
//ex:[2,2,2,2] = 2
//ex: [1,2,3,4,5] = 3

//function getAverage(arr){
    //loop through the array to get sum
    //let sum = arr.reduce((acc,c)=> acc + c)// this should get me a sum
    //avg -> sum /arr.length
    //return 
    //return Math.floor(sum/arr.length)
    
    //if they want the solution on one line: check out the const below
//}
const getAverage = arr => Math.floor(arr.reduce((acc,c)=> acc + c)/arr.length)

console.log(getAverage([2,2,2,2]))//2
console.log(getAverage([1,2,3,4,5]))//3
console.log(getAverage([1,1,1,1,1,1,2]))//1