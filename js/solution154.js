//solution154
//Given the triangle of consecutive odd numbers:
//                  1
//              3     5
//          7     9    11
//      13    15    17    19
//21    23      25      27      29
//...
//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//1 -->  1
//2 --> 3 + 5 = 8

const rowSumOddNumbers = LOL => LOL*LOL*LOL
//function rowSumOddNumbers(n){
    //3=27,4=64,5=125,6=216,...42=74088
//    return n*n*n
//    return Math.pow(n, 3)
//}

console.log(rowSumOddNumbers(7))//343
console.log(rowSumOddNumbers(5))//125
console.log(rowSumOddNumbers(6))//216
console.log(rowSumOddNumbers(42))//74088