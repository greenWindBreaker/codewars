//solution055
//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
//moves the number of spaces indicated by the dice two times.

const move = (c,roll)=> c+roll*2

console.log(move(5,5))//15