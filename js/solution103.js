//solution103
//Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

function getSumOfDigits(integer) {
    var sum = null
    var digits =  Math.floor(integer).toString();
    for(var ix = 0; ix < digits.length; ix++) {
      sum += +digits[ix];//added the + right before digits so that null wouldnt concatenate with it. ex-> null + '1' = 'null1'. null + +'1' = 1
    }
    return sum;
  }

console.log(Math.floor(123).toString())//'123'
console.log(getSumOfDigits(123))