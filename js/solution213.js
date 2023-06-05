//solution213
function fizzbuzz(x){
    for(let i=0;i<=x;i++){
        if(i%3===0 && i%5===0){
            console.log('fizzbuzz')
        }else if(i%5===0){
            console.log('buzz')
        }else if(i%3===0){
            console.log('fizz')
        }else{
            console.log(i)
        }
    }
}
console.log(fizzbuzz(100))