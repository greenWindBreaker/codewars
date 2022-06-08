//solution024
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = month => month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4 

console.log(quarterOf(9))//3