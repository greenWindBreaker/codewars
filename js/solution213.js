//solution213
function fizzbuzz(x){
    for(let i=0;i<=x;i++){
        if(i%3===0 && i%5===0){
            console.log('fizzbuzz')
        }
    }
    //return `place holder, your num is ${x}`
}
console.log(fizzbuzz(100))