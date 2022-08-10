//solution115
//Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7)
//for example: derive(7,8)
//In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
//The output of this function should be a string
//The exponent will never be 1, and neither number will ever be 0

const derive = (co,ex) => `${co*ex}x^${ex-1}`

console.log(derive(4,4))//'16x^3'