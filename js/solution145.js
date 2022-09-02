//solution145
//create a function that will take a float and return the amount formatting in dollars and cents.
//will need to account for adding trailing zeros if they are missing
//39.99 becomes $39.99

const formatMoney = amount => `$${amount.toFixed(2)}`


console.log(formatMoney(7533.8765))//$7533.88