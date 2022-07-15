//solution080
//The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
//You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
//Please return an integer. Round down.

const dutyFree = (x,d,h) => Math.floor(h/(x*(d*.01)))

console.log(dutyFree(12,50,1000))//166