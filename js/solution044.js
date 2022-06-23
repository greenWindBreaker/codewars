//solution044
//Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {return this === this.toUpperCase()}

console.log(String.prototype.isUpperCase('dsfsH'))//false