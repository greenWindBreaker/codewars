//solution014
//build a program that takes a value, integer , and returns a list of its multiples up to another value, limit 
//If limit is a multiple of integer, it should be included as well
//only positive intergers, no 0
//limit will always higher than base

function findMultiples(int, limit){
    let result =[] //sets up a variable array placeholder so we can populate it with our loop results.
    for(let i=int; i<=limit; i+=int){//create looping iterations, where we start with our 'int', condition to be 'limit', and update/add our i based on our 'int' factor.
        result.push(i)//adds the updated i's into our variable placeholder array.
    }
    return result
}
console.log(findMultiples(11,54))//[11,22,33,44]
console.log(findMultiples(7,13))//[7]
console.log(findMultiples(8,99))//[8,16,24,32,40,48,56,64,72,80,88,96]

