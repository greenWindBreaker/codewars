//solution026
//You are given two interior angles (in degrees) of a triangle.
//Write a function to return the 3rd.
//Note: only positive integers will be tested.

const otherAngle = (a,b) => 180 - (a+b)

console.log(otherAngle(40,100))//40

