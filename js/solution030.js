//solution30
//You need a function to handle each change from green, to yellow, to red, and then to green again
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//For example, when the input is green, output should be yellow

const updateLight = current => current === 'green' ? 'yellow' :
current === 'yellow' ? 'red' :
'green'

console.log(updateLight('red'))//'green'