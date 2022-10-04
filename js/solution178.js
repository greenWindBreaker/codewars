//solution178
// CONVERT NUMBER TO REVERSED ARRAY OF DIGITS... Given a random non-negative number, you have to return the digits of this number within an array in reverse order. example: 234123 --> [3,2,1,4,3,2]

function digitize(v){
    return String(v).split('').map(Number).reverse();
}

console.log(digitize(91254))//[4,5,2,1,9]