//solution100
//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
//The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places.

const usdcny = usd => `${(usd*6.75).toFixed(2)} Chinese Yuan`//putting usd*6.75 in () makes it so .toFixed(2) works! 

console.log(usdcny(12.35))//83.36 Chinese Yuan