//solution157
//INVERT VALUES... Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. ex: [3,4,-5,6] == [-3,-4,5,-6]

function invert(array){
    return array.map(x => x === 0 ? x : -x);
}

console.log(invert([3,4,-5,6]))