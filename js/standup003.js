//standup003
//10-18-2022

//given an array of integers as strings and numbers, return the sum if the array values as if all were numbers
//return your answer as a number
//ex: [9,3,'7','3'] =22
//ex: ['5','0',9,3,2,1,'9',6,7] =42

function sumMix(arr){
    //take the arr and reduceto a sum
    return arr.reduce((a,c)=> a + Number(c),0)//the 0 sets the type as a Number, default param of accu
}
console.log(sumMix([9,3,'7','3']))//22
console.log(sumMix(['5','0',9,3,2,1,'9',6,7]))//42