//solution040
//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//try every combination of a,b,c with [*+()] , and return the Maximum Obtained
//You cannot swap the operands

function expressionMatter(a,b,c){
    let expressOne = a*(b+c)
    let expressTwo = a*b*c
    let expressThree = a+b*c
    let expressFour = (a+b)*c
    let expressFive = a+b+c
    let newArr = [expressOne,expressTwo,expressThree,expressFour,expressFive]
    return Math.max(...newArr)
}

console.log(expressionMatter(1,1,1))//3
console.log(expressionMatter(2,2,2))//6