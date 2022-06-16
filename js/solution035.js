//solution035
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once

function doubleChar(str){
    let strSplit = str.split('')
    return strSplit.map(x=> x +x,0).join('')
}

console.log(doubleChar('moon'))//mmoooonn
console.log(doubleChar(' my dog rocky is the best!')) //  mmyy  ddoogg  rroocckkyy  iiss  tthhee  bbeesstt!!