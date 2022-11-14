//standup016
//11/14/22 monday standup @ 6pm est
// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//arr
//index -> element in the middle
//methods used: sort, indexOf
//[...] spread
function gimme(arr){
    //we want to sort the arr -> 
    //grab the num in the middle, 1st index
    //go back to orginal arr and find index of num from above
    //return [...arr].sort((a,b)=> a-b)//why did he spread it? becuase it will mutate the orginal arr. when we [...arr] we are making a copy 
    return arr.indexOf([...arr].sort((a,b)=> a-b)[1])  
}
console.log(gimme([2,3,1]))//0
console.log(gimme([5, 10, 14]))//1