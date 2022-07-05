//solution064
//You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(array, n){
    return array[n] ** n || -1
}

console.log(index([1,2,3,4,5,6,7], 5))//7776
