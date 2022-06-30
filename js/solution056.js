//solution056
//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a,b){
    let newArr = []
    for(let i = a; i <= b; i++){
        newArr.push(i)
    }
    return newArr
}

console.log(between(1,6))//[1,2,3,4,5,6]