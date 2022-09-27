//solution171
//Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
//Array/list will contain positives only .
//Array/list will always have even size

const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0)
  
console.log(minSum([5,4,2,3]))//22