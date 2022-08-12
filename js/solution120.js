//solution120
//Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

function isDigit(s){
    return parseFloat(s) === Number(s)
}

console.log(isDigit('42'))//true
console.log(isDigit('   -42.3 '))//true
console.log(isDigit('4s2'))//false
console.log(isDigit('4.2.2'))//false