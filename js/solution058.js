//solution058
//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let newArr =[]
    for(let i =0; i <= n; i++){
        newArr.push(2**i)
    }
    return newArr
}

console.log(powersOfTwo(2))//[1,2,4]

console.log(2**0)// test to see how if this is the way to write 2^0 and yes this works