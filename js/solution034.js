//solution034
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// the dish must start and end with the same letters as the animal's name.
//Assume that beast and dish are always lowercase strings, and that each has at least two letters

const feast = (beast,dish) => beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1) ? true : false

console.log(feast('bear','bread sugar'))//true
console.log(feast('bear','bread'))//false