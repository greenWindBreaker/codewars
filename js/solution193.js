//solution193
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    //reduce()
    let orderedNums = []
    for(let i = 0; i<number; i++){
        //orderedNums.push(i)//[0,1,2,3,4,5,6,7,8,9]
        if(i%3 === 0 || i%5 ===0 ){
            orderedNums.push(i)//[0,3,5,6,9]
        }
    }
    return orderedNums.reduce((a,c)=> a+c,0)//[0,3,5,6,9] = 23
}
//testcases:
console.log(solution(10))//23 = 3+5+6+9
console.log(solution(31))//