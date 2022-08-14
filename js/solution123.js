//solution123
// a method, which returns the smallest unused ID for your next new data item
//Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them

function nextId(ids){
    for(let i = 0; i < ids.length; i++){
        if(ids.indexOf(i) == -1){
            return i;
        }
    }
    return ids.length;
}

console.log(nextId([1,2,3,4,5,6,7]))//8
console.log(nextId([1,2,3,4,6,7]))//5