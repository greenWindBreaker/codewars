//solution179
//checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
//The function receives one parameter health which will always be a whole number between -10 and 10.

const checkAlive = health => health > 0

console.log(checkAlive(2))//true