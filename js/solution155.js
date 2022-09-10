//solution155
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// ex: [] --> []
// ex: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function(arr){
    let newArr = []
    for(let i = 0; i<arr.length;i++){
        newArr.push(`${i+1}: ${arr[i]}`)
    }
    return newArr
}

//shorter version using map() below:
//let number = arr => arr.map((x, index) => `${index+1}: ${x}`)

console.log(number(['fro','fa','roh']))//['1: fro', '2: fa', '3: roh']