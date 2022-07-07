//solution065
// eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
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