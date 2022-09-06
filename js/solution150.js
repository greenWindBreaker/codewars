//solution150
//You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
//Test.assertEquals(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH'

const ArrowFunc = arr => arr.map(x=> String.fromCharCode(x)).join('')

console.log(ArrowFunc([110,112]))//np