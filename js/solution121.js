//solution121
//create method all with two params-> (a sequence, a function) and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test
//example:
//all((1, 2, 3, 4, 5), greater_than_9) -> false
//all((1, 2, 3, 4, 5), less_than_9)    -> True

function all(arr,fun){
    return arr.every(fun)
}

console.log(all([1,2,3,4,5], function(v){return v<10}))//true
console.log(all([1,2,3,4,5], function(v){return v%2}))//false
console.log(all([1,2,3,4,5], function(v){return v>10}))//false