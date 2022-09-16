//solution161
//COUNT THE MONKEYS!... starting from the number 1, Given the number (n), populate an array with all numbers up to and including that number, but excluding zero. ex: n=10-> [1,2,3,4,5,6,7,8,9,10]

function monkeyCount(n){
    let monkeys = [];
    for(let i =1; i < n + 1; i++){
        monkeys.push(i);
    }
    return monkeys;
}

console.log(monkeyCount(12))//[1,2,3,4,5,6,7,8,9,10,11,12]