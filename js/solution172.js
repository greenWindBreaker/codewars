//solution172
// Move every letter in the provided string forward 10 letters through the alphabet.
// If it goes past 'z', start again at 'a'.
// Input will be a string with length > 0.

function moveTen(s){
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let movedByTen = 'klmnopqrstuvwxyzabcdefghij'
    return [...s].map(x => movedByTen[abc.indexOf(x)]).join('')
}

console.log(moveTen('car'))//mkb