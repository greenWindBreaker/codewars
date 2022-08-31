//solution143
//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u)
//If they are, change the array value to a string of that vowel.
//Return the resulting array.

function isVow(a){
    //117=u,101=e,97=a,105=i,111=o
    let newArr = []
    for(let i = 0; i < a.length; i++){
        if(a[i] === 97){
            newArr.push('a')
        }else if(a[i]===101){
            newArr.push('e')
        }else if(a[i]===105){
            newArr.push('i')
        }else if(a[i]===111){
            newArr.push('o')
        }else if(a[i]===117){
            newArr.push('u')
        }else{
            newArr.push(a[i])
        }
    }
    return newArr
}

// const v={
//     '97' : 'a',
//     '101': 'e',
//     '105' : 'i',
//     '111':'o',
//     '117':'u'
// }
//const isVow = a => a.map(x=> [x] || x)

console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))//['e', 121, 110, 113, 113, 103, 121, 121, 'e', 107, 103]
console.log(isVow([113,122,102,116,118,98,114,101,117,99,108,115,97,106,120,122,101,97,108,102]))//[113, 122, 102, 116, 118, 98, 114, 'e', 'u', 99, 108, 115, 'a', 106, 120, 122, 'e', 'a', 108, 102]