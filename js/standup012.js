//standup012
//standup for friday, 11/4/22, replaced with Tea-Spill on discord
//standup continued on 11/7/22
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

function missingNum(arr, mixArr){
    //return arr.filter(n=> mixArr.indexOf(n) === -1)[0] || 0//its quadratic so its slow, works but slow. we have a loop inside of a loop
    //in this problem: 'stars align' becuase our lengths for nonmissing nums are the same so
    if(arr.length === mixArr.length){//happenign in constant time, alwasy faster than linear
        return 0
    }else{
        let arrSum = arr.reduce((a,c)=> a+c,0)//these two are linear
        let mixSum = mixArr.reduce((a,c)=> a+c,0)
        return arrSum - mixSum
    }
}
//high frequency problem
//understand this problem deeply
console.log(missingNum([1,2,3,4,5], [3,4,1,5]))
console.log(missingNum([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))