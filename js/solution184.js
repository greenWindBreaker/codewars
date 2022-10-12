//solution184
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//ex: 'test' = 'es'
//ex: 'testing' = 't'
//ex: 'A' = 'A'

function getMiddle(str){
    let odd = Math.floor(str.length/2)
    if(str.length < 2){
        return str
    }else if(str.length%2===0){
        return str.charAt((str.length/2)-1)+str.charAt(str.length/2)
    }else{
        return str.charAt(odd)
    }
}

console.log(getMiddle('racecar'))//odd: 'e'
console.log(getMiddle('pumpernickel'))//even: 'rn'
console.log(getMiddle('J'))//'J'
console.log(Math.floor('pumpernic'.length/2))//4 which would be char 'e'