//solution082
//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//If both arr1 and arr2 are empty, then just return an empty array.
//Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1,arr2){
    let arr3 = arr1.concat(arr2)
    let arr4 = [...new Set(arr3.sort((a,b)=> a-b))]
    return arr4
    
}

console.log(mergeArrays([1,2,39,7],[6,4,1]))//[1,2,4,6,7,39]

