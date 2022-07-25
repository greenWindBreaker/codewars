//solution097
//Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
//If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

const chromosomeCheck = sperm => sperm === 'XY' ? `Congratulations! You're going to have a son.` : `Congratulations! You're going to have a daughter.`

console.log(chromosomeCheck('XX'))//`Congratulations! You're going to have a daughter.`