//solution127
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

//const findShort = s => Math.min(...s.split(' ').map(s=>s.length))
function findShort(s){
    //return s.split(' ').map(s=>s.length)//returns an array of numbers. the length of each word
    return Math.min(...s.split(' ').map(s=>s.length))// without '...' spread operator, it would reutrn NaN. Math.min returns the smallest number
}

console.log(findShort('asdf ghte as hterw qw nbvxce'))//2