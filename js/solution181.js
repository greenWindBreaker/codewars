//solution181

// GRASSHOPPER- SUMMATION... Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. ex: summation(8) = 36 because 1+2+3+4+5+6+7+8= 36

const summation = n => n* (n+1)/2;

console.log(summation(8))//36