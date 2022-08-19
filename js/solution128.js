//solution128
//Write function which takes a string and make an acronym of it.

function toAcronym(inp){
    let x = inp.split(' ')
    let result = ''
    //return (x[0][0]+x[1][0]).toUpperCase()
    for(let i = 0;i<x.length; i++){
        result += x[i][0] // has to be += in that order, not =+ , for it to work 
    }
    return result.toUpperCase()
}

console.log(toAcronym('Hot dog'))//HD
console.log(toAcronym('blue berry pie'))//BBP
