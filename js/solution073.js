//solution073
//your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

const xor = (a,b) => a === false && b === false ? false : a === true && b === true ? false : true

console.log(xor(false,true))//true