//solution017
//Remove fist and Last character in string

const removeCharA = str => str.slice(1, -1)

function removeChar(str){
    let newArr = str.split('')
    let last= newArr.pop()
    let first= newArr.shift()
    return newArr.join('')
}
console.log(removeChar('Asuka'))//'suk'
console.log(removeCharA('Elephant'))//'lephan'