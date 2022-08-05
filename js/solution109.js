//solution109
//This is the first step to understanding FizzBuzz
//Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
//Your expected output is an array of positive integers from 1 to n (inclusive).
//Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n){
    let newArray = []
    for(let i =1; i<=n; i++){
        newArray.push(i)
    }
    return newArray
}

console.log(preFizz(25))//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]