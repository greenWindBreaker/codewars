//standup006
//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//For example:
//([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
// practice your methods with this problem

//never empty, at least num in the array
//worded odd = make sure to really understand the problem by asking for examples eg. testcases

//function nEvenNums(arr,num){
    //filter out nums
    //n last nums from the filtered array - slice (-n)
    //for - grabbing even nums big-O(n)
    //for - grab total from right big-O(n)
    //return arr.filter(n => n%2===0)//filters through every num make sure theyre even
    //return arr.filter(n => n%2===0).slice(-num)//makes sure it slices from the right x number of spaces
//}

const nEvenNums = (arr,num) => arr.filter(n => n%2===0).slice(-num)

console.log(nEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9]))//[4, 6, 8]
console.log(nEvenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26]))//[-8, 26]

//we are now trying to use methods and not so much brute forcing

//playing 2 games with these coding interviews: 1.can you code?, 2.do i want to work with this person for the next 2 years?