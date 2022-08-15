//solution124
//Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
//If n == 0 return an empty sequence []

const first = (arr,n) => arr.slice(0,n)

console.log(first(['a','b','c','d','e'],2))//['a','b']