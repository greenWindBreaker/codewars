//test-assment for codility
function solution(A) {
    //given array A
    //A can contain negative nums
    //if all negative nums return 1, never 0
    // return smallest positive integar not in the array, not 0
    //not negative
    //return Math.max(...A)//retuns 3
    let sorted = A.sort((a,b)=> a-b)
    
    console.log(sorted)
    //return Math.max(...A)+1
}
console.log(solution([1,2,3]))//4 
console.log(solution([1, 3, 6, 4, 1, 2]))//5

//standup018
//11/17/22
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1
function avgLengthRepeat(arr){
    //get avg length -> rounded
    //create new arr using each letter the avgLength amount
    const avgLength = arr.join('').length / arr.length
    return arr.map(str=> str[0].repeat(avgLength))
}
console.log(avgLengthRepeat(['aa', 'bbb', 'cccc']))// ['aaa', 'bbb', 'ccc'] average length is 3
console.log(avgLengthRepeat(['aa', 'bb', 'ddd', 'eee']))//['aaa', 'bbb', 'ddd', 'eee']  average length is 2.5 round up to 3