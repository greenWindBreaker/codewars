//solution089
//Define a function that removes duplicates from an array of numbers and returns it as a result.
//The order of the sequence has to stay the same.
//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/solutions

function distinct(a){
    let b =[]
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            b.push(a[i])
        }
    }
    return b
}

console.log(distinct([1,2,3,4,4,5,6]))//123456
console.log(distinct([1,1,2]))//12
console.log(distinct([1]))//1
