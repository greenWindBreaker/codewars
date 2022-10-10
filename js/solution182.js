//solution182
//SIMPLE MULTIPLICATION.. if even * 8, if odd *9.

function simpleMultiplication(number) {
    return number%2===0? number*8 : number*9;
}

console.log(simpleMultiplication(144))//1152