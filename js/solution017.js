//solution017
//given an array of numbers, return the sum of all of the positives ones.
//if there is nothing to sum, the sum is default to 0

function positiceSum(arr){
    let sum = 0
    for(let i =0;  i < arr.length; i++){  //setup loop to go through array of given length
        if(arr[i] > 0){  // if arr[i] is greater than 0
             sum += arr[i] //add arr[i] to sum
        }
    }
    return sum
}
console.log(positiceSum([1,-4,7,12]))//20