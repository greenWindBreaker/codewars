//solution071
//we need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not.
//All values will be positive integers or floats, or zero.

const plural = n => n === 1 ? false : true

console.log(plural(3))//true