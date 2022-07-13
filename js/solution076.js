//solution076
//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//Note: there will always be exactly one wolf in the array.
//Remember that you are standing at the front of the queue which is at the end of the array
//ex below
//Input: ["sheep", "sheep", "sheep", "wolf", "sheep"] Output:"Oi! Sheep number 1! You are about to be eaten by a wolf!"
//Input: ["sheep", "sheep", "wolf"] Output: "Pls go away and stop eating my sheep"

function warnTheSheep(q){
    let queReversed = q.reverse()
    let n = queReversed.findIndex(x => x === 'wolf')
    if(queReversed[0] === 'wolf'){
        return 'Pls go away and stop eating my sheep'
    }else{
        return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!` 
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep",'sheep']))//Oi! Sheep number 2! You are about to be eaten by a wolf!

//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/solutions/javascript