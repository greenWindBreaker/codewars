//solution188
//complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

const solution = (str,ending) => str.endsWith(ending)

console.log(solution('choco milk','ilk'))//true
console.log(solution('sumo','omo'))//false
console.log(solution('abcde','abc'))//expected to return false