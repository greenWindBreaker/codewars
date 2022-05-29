//solution013
//stringy string
//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
//start string with '1'
//The size will always be positive and will only use whole numbers.

function stringy(size){
    let str=''
    for(let i=1; i <= size; i++){
        str+= i%2;
    }
    return str
}
console.log(stringy(11))// '10101010101'
console.log(stringy(4))// '1010'
console.log(stringy(5))// '10101'

//const stringy = size => ''.padStart(size,'10')