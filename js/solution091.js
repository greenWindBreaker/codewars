//solution091
//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
//Division by zero should return NaN.

function remainder(x1,x2){
    return x1 > x2 ? x1%x2 : x2%x1
}

console.log(remainder(4,-13))