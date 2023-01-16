//solution200
//title= youre a square!
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
    return Math.sqrt(n) %1===0;
}

console.log(isSquare(0))//true
console.log(isSquare(-4))//false
console.log(isSquare(3))//false
console.log(isSquare(4))//true