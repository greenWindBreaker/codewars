//solution072
// return multiplication table for x that is always an integer from 1 to 10.
//Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

const multiTable = x => `1 * ${x} = ${1*x}\n2 * ${x} = ${2*x}\n3 * ${x} = ${3*x}\n4 * ${x} = ${4*x}\n5 * ${x} = ${5*x}\n6 * ${x} = ${6*x}\n7 * ${x} = ${7*x}\n8 * ${x} = ${8*x}\n9 * ${x} = ${9*x}\n10 * ${x} = ${10*x}`

console.log(multiTable(3))
//1 * 3 = 3
//2 * 3 = 6
//3 * 3 = 9
//4 * 3 = 12
//5 * 3 = 15
//6 * 3 = 18
//7 * 3 = 21
//8 * 3 = 24
//9 * 3 = 27
//10 * 3 = 30