//solution125
//Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.
//You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.

const calculate_total = (subtotal, taxPercent, tipPercent) => +((subtotal+(subtotal*tipPercent/100)+(subtotal*taxPercent/100)).toFixed(2))
//I replaced Number() to +, does the same thing.

console.log(calculate_total(5,5,10))//5.75
console.log(calculate_total(80.94,0,20))//97.13