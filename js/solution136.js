//solution136
//Your task is to write a function maskify, which changes all but the last four characters into '#'
//ex. 'asdf1234' -> '####1234'

function maskify(cc){
    let divvy = cc.split('')
    //let newStr = ''
    // for(let i = 0; i < cc.length ; i++){
    //     newStr += '#'
    // }
    // return newStr // this works! returns '######'
    for(let i = 0; i < cc.length - 4; i++){
        divvy[i] = '#'
    }
    return divvy.join('')
}

console.log(maskify('gfaasdASfd'))//'######ASfd'