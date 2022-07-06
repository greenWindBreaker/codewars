//solution065

function findLongest(str){
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++){
        if(spl[i].length > longest){
            longest = spl[i].length
        }
    }
    return longest
   
}

console.log(findLongest('htos weoidsakjf tuer'))//10