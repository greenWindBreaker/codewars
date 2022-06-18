//solution036
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
//d = father's age
//s = son's age

const twiceAsOld = (d,s) => Math.abs(d-(s*2)) //Math.abs will make it so it will always return a postive number

console.log(twiceAsOld(20,4))//12
console.log(twiceAsOld(30,17))//4