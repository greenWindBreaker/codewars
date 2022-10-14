//solution186
// For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function (){
    let words = this.split(' ')
    for(let i = 0; words.length < i;i++){
        words[i] = words[i][0].toUpperCase()+words[i].slice(1)
    }
    return words.join(' ')
}

//test below:
function jadenCase(str){
    let newArr = str.split(' ')
    let result = []
 
    for(let i = 0; i < newArr.length;i++){
        result.push(newArr[i][0].toUpperCase()+newArr[i].slice(1))//will not work with .silce(0) , .pop() or .shift()
    }
    return result.join(' ')
}

console.log(jadenCase('the green meadow turns brown'))//The Green Meadow Turns Brown
console.log(jadenCase('thank god its friday'))//Thank God Its Friday
console.log(jadenCase('dancing to the beat'))// Dancing To The Beat