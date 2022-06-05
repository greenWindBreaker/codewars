//solution020
//check whether the provided array(a) contains the value(x).
//check whether the provided array contains the value.
//Return true if the array contains the value, false if not
const check = (a,x) => a.includes(x)

console.log(check([5,6],6))//true
console.log(check(['tattoo','ink','bold'],6))//false
console.log(check(['tattoo','ink','bold'],'ink'))//true
console.log(check(['tattoo','ink','bold'],'old'))//false
