//standup005
//10-20-22

//You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
//ex: repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

function repeats(arr){
    //brute force= loop through, oush to an arr then sum?
    //filter() when need to grab a value from an array. filter will take a callback and look at everyy individual number
    //arr -> filter single values -> reduce to get a sum
    //want to see if a num repeats, trick -> index of num is last index of num
    //return arr.filter(n=> arr.indexOf(n)=== arr.lastIndexOf(n))//if true we know its a singu;ar, if not we know there is another version of that number in the arr
    //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    //The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
    return arr.filter(n=> arr.indexOf(n)=== arr.lastIndexOf(n)).reduce((a,c)=> a + c,0)
}
//need these methods in Anki
console.log(repeats([4,5,7,5,4,8]))//15
console.log(repeats([9, 10, 19, 13, 19, 13]))//19