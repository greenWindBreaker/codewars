//check same case
//Write a function that will check if two given characters are the same case.
//If either of the characters is not a letter, return -1. If both characters are the same case, return 1. If both characters are letters, but not the same case, return 0
//example: 'a' and 'g' returns 1
//'b' and 'G' returns 0
//'0' and '?' returns -1

console.log(sameCase('!','b'))//-1
console.log(sameCase('b','c'))//1
console.log(sameCase('b', 'C'))//0

function sameCase(a,b){
    return a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()? -1
    : a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() &&  b === b.toUpperCase()? 1
    :0
}