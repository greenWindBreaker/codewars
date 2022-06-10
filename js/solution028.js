//solution028
// first element of an array that is not consecutive. we mean not exactly 1 larger than the previous element of the array.
//If the whole array is consecutive then return null
//The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too
function firstNonConsecutive(arr){
    for(let i =0; i < arr.length -1; ++i){
        if(arr[i] +1 !== arr[i+1]){
            return arr[i +1]
        }
    }
    return null
}
console.log(firstNonConsecutive([1,2,3,4,6,7,8,9]))//6
console.log(firstNonConsecutive([-5,-4,-2,-1,0,1,2,3]))//-2
console.log(firstNonConsecutive([6,7,8,9]))//null

//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/solutions