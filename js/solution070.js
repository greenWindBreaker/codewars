//solution070
//Inspired by the development team at Vooza, write the function that accepts name of programmer and returns the number of lightsabers owned by that person
//the only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
//Note: your function should have a default parameter.

const howManyLightsabersDoYouOwn = name => name === 'Zach'? 18 : 0

console.log(howManyLightsabersDoYouOwn('Drew'))//0
console.log(howManyLightsabersDoYouOwn('Zach'))//18
