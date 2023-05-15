//solution209
function powersOfTow(n){
    let result=[]
    for(let i=0; i<n;i++){
        result.push(2**i)
    }
    return result
}
console.log(powersOfTow(3))//[1,2,4]