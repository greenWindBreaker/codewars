//solution176
//SQUARE(n) SUM... complete the aquare function so that it squares each number passed into it and then sums the results together. example-> [2,2] shoud return 8 becuase 2^2 + 2^2 = 8 

function squareSum(numbers){
    return numbers.reduce((acc, c) => acc + (c * c), 0);
}

console.log(squareSum([3,3,6,9]))//135