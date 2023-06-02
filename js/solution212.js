//solution212
//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//try every combination of a,b,c with [*+()] , and return the Maximum Obtained
function x(a,b,c){
    let way1=a*(b+c)
    let way2=a*b*c
    let way3=a+b*c
    let way4=a+b+c
    let way5=(a+b)*c
    return Math.max(way1,way2,way3,way4,way5)
}
console.log(x(1,2,3))//9 
console.log(x(1,1,1))//3
console.log(x(9,1,1))//18