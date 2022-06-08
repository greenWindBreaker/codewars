//solution023
//Create a function that gives a personalized greeting.
//This function takes two parameters: name and owner.
// name = owner --> 'hello boss' otherwise 'hello guest'

const greet = (name,owner) => name === owner ? 'Hello boss' : 'Hello guest'

console.log(greet('tina','tina'))// 'hello boss'