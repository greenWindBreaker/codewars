//solution211
//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a,b){
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}
console.log(between(3,9))//3,4,5,6,7,8,9