//solution059
//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//If no occurrences can be found, a count of 0 should be returned
//ex. ("Hello", "l")  ==>  2

function strCount(str,letter){
    return str.split('').filter(x => x === letter).length
}

console.log(strCount('Rocky','y'))//1
console.log(strCount('banana','a'))//3